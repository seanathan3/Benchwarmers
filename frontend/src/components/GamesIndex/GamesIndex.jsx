import IndexList from "./IndexList";
import IndexNav from "./indexNav";
import Map from "../Map/Map";
import './gamesIndex.css';
import { useState } from "react";

const GamesIndex = () => {
    const [sport, setSport] = useState(null);


    function handleSportChange(sport) {
        setSport(sport);
debugger
    };

    return(
        <>
            <div id="gi-master">
                <IndexNav parentCallback={handleSportChange}/>
                <div id="gi-content">
                    <IndexList sport={sport} />
                    <Map sport={sport}/>
                </div>
            </div>
        </>
    )
};

export default GamesIndex;