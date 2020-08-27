import React from 'react';

import "./ParticipantsCounter.css";

const ParticipantsCounter = props => {
    return (
        <div className="durationCounter">
            <button className="durationCounter__button" onClick={props.decrementParticipants}>-</button>
            <p className="durationCounter__text">
                {
                    props.participants !== 0 ? props.participants + " walkers" : "Pas de limite"
                }
            </p>
            <button className="durationCounter__button" onClick={props.incrementParticipants}>+</button>
        </div>
    );
}
 
export default ParticipantsCounter;