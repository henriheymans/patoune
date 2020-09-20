import React, { useState, useEffect, Fragment } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./CustomMap.css";
import mapOptions from "../../helpers/mapOptions.json";


import NewWalkWindow from "../NewWalkWindow/NewWalkWindow";
import WalkPopin from "../WalkPopin/WalkPopin";

// import fakeWalks from "../../fakeData/fakeWalks.json";

const CustomMap = (props) => {
  let [initialCenter, setInitialCenter] = useState({});
  let [mapCenter, setMapCenter] = useState({});
  // let [call, setCall] = useState(false);
  // let [walks, setWalks] = useState([]);
  let [showNewWalkWindow, setNewWalkWindow] = useState(false);
  let [selectedWalk, setSelectedWalk] = useState({});
  let [showWalkPopin, setShowWalkPopin] = useState(false);

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
       styles: mapOptions
    })
 }

 // Run on every render
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMapCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setInitialCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const onClick = (event, infos) => {
    // Open popin with the selected walk infos
      const walkId = infos.walkId;
      fetch(`http://localhost:3000/walks/${walkId}`)
        .then(response => response.json())
        .then(data => setSelectedWalk(data))
      setShowWalkPopin(!showWalkPopin);
      console.log(showWalkPopin)
  }

  // CLICK ON MAP (NOT MARKER)
  const onMapClicked = (mapProps, map, clickEvent) => {
    setMapCenter({
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng()
    });
    setNewWalkWindow(true);
  }

  const closeWalkPopin = () => {
    setShowWalkPopin(false);
  }

  const closeNewWalkWindow = () => {
    setNewWalkWindow(false);
  }

  return (
        <div className={`l-customMap ${showNewWalkWindow === true ? 'customMap--fullscreen' : ""} ${showWalkPopin === true ? 'customMap--fullscreen' : ""}`}>
          <Map
            google={props.google}
            center={mapCenter}
            onClick={onMapClicked}
            onReady={(mapProps, map) => _mapLoaded(mapProps,map)}
          >
            <Marker
              name={"Your position"}
              position={{
                lat: initialCenter.lat,
                lng: initialCenter.lng,
              }}

            />
            {
                props.walksList && Object.keys(props.walksList).map(item => 
                    <Marker position={{
                        lat:props.walksList[item].latitude,
                        lng:props.walksList[item].longitude,
                    }}
                    icon={{
                      url:'https://i.pinimg.com/originals/fb/14/dd/fb14dd05076c9cfd88a7d85b9ddc9f1a.png',
                      scaledSize: new props.google.maps.Size(64,64)

                    }}
                    key={props.walksList[item]._id}
                    walkId={props.walksList[item]._id}
                    onClick={onClick}
                />
                )
            }
            {
              showNewWalkWindow &&          
              <Marker position={{
                lat:mapCenter.lat,
                lng:mapCenter.lng,
              }}
                onClick={onClick}
              />
            }
          </Map>
          {
            showNewWalkWindow === true ? <NewWalkWindow position={mapCenter} closeNewWalkWindow={closeNewWalkWindow} /> : ""               
          }
          {
            showWalkPopin === true ? <WalkPopin closeWalkPopin={closeWalkPopin} walkInformations={selectedWalk} /> :""
          }
      </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
})(CustomMap);
