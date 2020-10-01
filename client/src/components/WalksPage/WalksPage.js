import React, {useState, useEffect} from 'react';

import CustomMap from "../CustomMap/CustomMap";
import WalksSidebar from "../WalksSidebar/WalksSidebar";

import "./WalksPage.scss";

import fakeWalks from "../../fakeData/fakeWalks.json";


const WalksPage = () => {
    let [call, setCall] = useState(false);
    let [walks, setWalks] = useState([]);

    useEffect(() => {
        setWalks(fakeWalks);
        setCall(true);
    });

    return (
        <div className="l-walksPage">
            <WalksSidebar walksList={walks} />
            <CustomMap walksList={walks} />
        </div>
    );
}
 
export default WalksPage;