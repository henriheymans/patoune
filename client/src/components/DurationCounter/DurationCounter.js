import React from 'react';

import "./DurationCounter.css";

const DurationCounter = props => {

    return (
        <div className="durationCounter">
            <button className="durationCounter__button" onClick={props.decrementDuration}>-</button>
            <p className="durationCounter__text">
                {
                    props.duration !== 0 ? props.duration + " minutes" : "Ne pas renseigner"
                }
            </p>
            <button className="durationCounter__button" onClick={props.incrementDuration}>+</button>
        </div>
    );
}
 
export default DurationCounter;