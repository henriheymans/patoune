import React from 'react';

import WalkTile from "../WalkTile/WalkTile.js";
import "./WalksSidebar.css";

import fakeImage from "../../img/nature.jpg";

const WalksSidebar = props => {
    let walkList = props.walksList;

    return (
        <div className="l-walks-sidebar">
            {
                walkList && 
                Object.keys(walkList).map(walkItem => 
                    <WalkTile 
                        name="Balade dans la forêt des arbres !"
                        participantsNumber={walkList[walkItem].participantsNumber}
                        latitude={walkList[walkItem].latitude}
                        longitude={walkList[walkItem].longitude}
                        dogType={walkList[walkItem].dogType}
                        duration={walkList[walkItem].duration}
                        startDate={walkList[walkItem].startDate}
                        image={fakeImage}
                    />
                )
            }
        </div>
    );
}
 
export default WalksSidebar;