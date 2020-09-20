import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import "./NewWalkWindow.css";

import DurationCounter from "../DurationCounter/DurationCounter";
import DogTypeSelector from "../DogTypeSelector/DogTypeSelector";
import ParticipantsCounter from "../ParticipantsCounter/ParticipantsCounter";

import dogTypeList from "../../helpers/dogTypes.json";

import clockIcon from "../../img/icons/clock_icon.png";
import dogIcon from "../../img/icons/dog_icon.png";
import peopleIcon from "../../img/icons/people_icon.png";


const NewWalkWindow = props => {

    const [startDate, setStartDate] = useState(new Date());
    const [walkDuration, setWalkDuration] = useState(0);
    const [dogType, setDogType] = useState("");
    const [maximumParticipants, setMaximumParticipants] = useState(0);
    

    const changeStartDate = date => {
        setStartDate(date);
    }

    const incrementDurationCounter = (event) => {
        event.preventDefault();
        setWalkDuration(walkDuration + 30);
    }

    const decrementDurationCounter = event => {
        event.preventDefault();
        if(walkDuration > 0) {
            setWalkDuration(walkDuration - 30);
        }
        else {
            setWalkDuration(0);
        }
    }

    const incrementParticipantsCounter = (event) => {
        event.preventDefault();
        setMaximumParticipants(maximumParticipants + 1);
    }

    const decrementParticipantsCounter = event => {
        event.preventDefault();
        if(maximumParticipants > 0) {
            setMaximumParticipants(maximumParticipants - 1);
        }
        else {
            setMaximumParticipants(0);
        }
    }

    const selectDogType = (id) => {
        setDogType(id);
    }

    const createNewWalk = event => {
        event.preventDefault();
        const {lat, lng} = props.position;
        const newWalkSubmit = {
            "latitude":lat,
            "longitude":lng,
            "creatorId":"test",
            "startDate": startDate,
            "duration": walkDuration,
            "dogType":dogType,
            "participantsNumber":maximumParticipants,
            "closed":false
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newWalkSubmit)
        };
        fetch('http://localhost:3000/walks/add', requestOptions)
            .then(response => response.json())
    }

    return (
        <div className="newWalkWindow">
            <div className="newWalkWindow_close" onClick={props.closeNewWalkWindow}>X</div>
            <form className="newWalkWindow__form">
                <h1>Ajouter une nouvelle balade</h1>
                <Calendar
                    value={startDate}
                    onChange={changeStartDate}
                />
                <div className="newWalkWindow__form__section">
                    <img src={clockIcon} />
                    <h3>Durée de la balade</h3>
                    <DurationCounter duration={walkDuration} incrementDuration={incrementDurationCounter} decrementDuration={decrementDurationCounter} />
                </div>
                <div className="newWalkWindow__form__section">
                    <img src={dogIcon} />
                    <h3>Type de chiens acceptés</h3>
                    <DogTypeSelector dogTypeList={dogTypeList} handleClick={selectDogType} />
                </div>
                <div className="newWalkWindow__form__section">
                    <img src={peopleIcon} />
                    <h3>Nombre de participants</h3>
                    <ParticipantsCounter participants={maximumParticipants} incrementParticipants={incrementParticipantsCounter} decrementParticipants={decrementParticipantsCounter} />
                </div>
                <input type="submit" value="Créer la balade" onClick={createNewWalk} />
            </form>
        </div>
    );
}
 
export default NewWalkWindow;