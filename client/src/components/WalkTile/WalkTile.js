import React, {Fragment} from 'react';

import "./WalkTile.css";

const WalkTile = props => {
    let {name, participantsNumber, dogType, duration, startDate, latitude, longitude} = props;

    const streetViewImgUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${latitude},${longitude}&fov=20&pitch=-5&key=${process.env.REACT_APP_MAPS_API_KEY}`;
    const formatDate = timestamp => {
        let parsedTimestamp = parseInt(timestamp);
        let formattedDate = new Date(parsedTimestamp).toLocaleTimeString("en-US");
        return formattedDate;
    }

    const streetViewOptions = {
        position:{lat: latitude, lng: longitude},
        pov: {heading: 100, pitch: 0},
        zoom: 1
    }

    return (
        <Fragment>
        <div className="walkTile">
            <div className="walkTile-image">
                <img src={streetViewImgUrl} />
            </div>
            <div className="walkTile-text">
                <h3 className="walkTile-text-name">{name}</h3>
                <p className="walkTile-information">{participantsNumber} maximum participants </p>
                <p className="walkTile-information">For {dogType}</p>
                <p className="walkTile-information">Walk duration : {duration} minutes</p>
                <p className="walkTile-text-duration">Starts at {formatDate(startDate)}</p>
            </div>
        </div>
        <hr />
        </Fragment>
    );
}
 
export default WalkTile;