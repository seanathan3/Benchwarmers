import IndexList from "./IndexList";
import IndexNav from "./indexNav";
import Map from "../Map/Map";
import './gamesIndex.css';
import { useState } from "react";

const GamesIndex = () => {
    const [sport, setSport] = useState(null);
    const [skillLevel, setSkillLevel] = useState(null);


    function handleSportChange(sport) {
        setSport(sport);
debugger
    };

    function handleSkillLevelChange(skillLevel) {
        setSkillLevel(skillLevel);
    }

    return(
        <>
            <div id="gi-master">
                <IndexNav parentSportCallback={handleSportChange} parentSkillLevelCallback={handleSkillLevelChange}/>
                <div id="gi-content">
<<<<<<< HEAD
                    <IndexList sport={sport} />
                    <Map sport={sport}/>
=======
                    <IndexList skillLevel={skillLevel} sport={sport} />
                    <Map sport={sport} />
>>>>>>> b35085720466ba9e7e3ea2b93bd293eb21bb8edd
                </div>
            </div>
        </>
    )
};

export default GamesIndex;