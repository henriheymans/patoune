import React from 'react';
import "./WalkPopin.css";

import WalkImage from "../../img/nature.jpg";
import Avatar from "../../img/icons/avatar.png";

const WalkPopin = (props) => {
    console.log(props)
    return (
        <div className="l-walkpopin">
            <div className="walkpopin-overlay"></div>
            <div className="walkpopin-popin">
                <div className="walkpopin-user">
                    <div className="walkpopin-user-avatar">
                        <img loading="lazy" src={Avatar} />
                    </div>
                    <div className="walkpopin-user-infos">
                        <h3 className="user-name">Marie Labalade</h3>
                        <p className="user-rank">Baladeuse confirmée</p>
                    </div>
                </div>
                <div className="walkpopin-image">
                    <img src={WalkImage} />
                </div>
                <div className="walkpopin-walk-informations">
                    <h3 className="walk-informations-walkName">Balade dans la forêt !</h3>
                    <h4 className="walk-informations-walkAddress">12 Rue de la nouvelle Fôret, 64 600 Anglet</h4>
                    <p className="walk-informations-proximityNumber">35 balades se sont déjà faites à cet endroit !</p>
                    <div className="walk-informations-tiles">
                        <div className="walk-tile-item">
                            <div className="walk-tile-item-icon">
                            </div>
                            <div className="walk-tile-item-text">
                                <p>Vite ! La balade débutera bientôt !</p>
                            </div>
                        </div>
                        <div className="walk-tile-item">
                            <div className="walk-tile-item-icon">
                            </div>
                            <div className="walk-tile-item-text">
                                <p>Cette balade durera environ 45 minutes</p>
                            </div>
                        </div>
                        <div className="walk-tile-item">
                            <div className="walk-tile-item-icon">
                            </div>
                            <div className="walk-tile-item-text">
                                <p>Tous les chiens sont acceptés pour cette balade !</p>
                            </div>
                        </div>
                        <div className="walk-tile-item">
                            <div className="walk-tile-item-icon">
                            </div>
                            <div className="walk-tile-item-text">
                                <p>7 / 15 personnes participent à cette balade</p>
                            </div>
                        </div>
                    </div>
                    <div className="walk-inscription-button-container">
                        <button className="walk-inscription-button global-button">Rejoindre la balade</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WalkPopin;