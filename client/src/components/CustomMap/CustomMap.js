import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./CustomMap.css";
import mapOptions from "../../helpers/mapOptions.json";


import NewWalkWindow from "../NewWalkWindow/NewWalkWindow";
import WalkPopin from "../WalkPopin/WalkPopin";

const CustomMap = (props) => {
  let [initialCenter, setInitialCenter] = useState({});
  let [mapCenter, setMapCenter] = useState({});
  let [call, setCall] = useState(false);
  let [walks, setWalks] = useState([]);
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
    // FETCH ALL DATA
    fetch('http://localhost:3000/walks')
      .then(response => response.json())
      .then(data => setWalks(data.walksList))
      setCall(true);
  }, []);

  const onClick = (event, infos) => {
    // Open popin with infos
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


  
  return (
      <div>
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
              walks && Object.keys(walks).map(item => 
                  <Marker position={{
                      lat:walks[item].latitude,
                      lng:walks[item].longitude,
                  }}
                  icon={{
                    url:'https://i.pinimg.com/originals/fb/14/dd/fb14dd05076c9cfd88a7d85b9ddc9f1a.png',
                    scaledSize: new props.google.maps.Size(64,64)

                  }}
                  key={walks[item]._id}
                  walkId={walks[item]._id}
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
          showNewWalkWindow && <NewWalkWindow position={mapCenter} />                
        }
        {
          showWalkPopin && <WalkPopin walkInformations={selectedWalk} />
        }
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBOOYZfFEQlTRvkxWrrD2juSgiyUKxX0Us",
})(CustomMap);
