import React, {Fragment} from 'react';

import "./WalkTile.css";

const WalkTile = props => {
    let {name, participantsNumber, dogType, duration, startDate, image} = props;

    const formatDate = timestamp => {
        let parsedTimestamp = parseInt(timestamp);
        console.log(parsedTimestamp);
        let formattedDate = new Date(parsedTimestamp).toLocaleTimeString("en-US");
        return formattedDate;
    }

    return (
        <Fragment>
        <div className="walkTile">
            <div className="walkTile-image">
                <img src={image} />
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