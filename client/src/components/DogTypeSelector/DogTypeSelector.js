import React from 'react';

import "./DogTypeSelector.css";

const DogTypeSelector = props => {

    const setDogType = id => {
        console.log(id)
    }

    return (
        <div className="dogTypeSelector">
            {
                props.dogTypeList.map((item)=>(
                    <div key={item.id} className="dogTypeSelector__item" onClick={() => props.handleClick(item.id)}>
                        <img src="https://image.freepik.com/free-vector/cute-brown-dog-avatar_79416-70.jpg" />
                        <p>{item.type}</p>
                    </div> 
                ))
            }
        </div>
    );
}
 
export default DogTypeSelector;