import IndexSportFilter from "./indexSportFilter";
import IndexSkillLevelFilter from "./indexSkillLevelFilter";
import { useState } from "react";

const IndexNav = ({parentSportCallback, parentSkillLevelCallback}) => {
    const [selectedSport, setSelectedSport] = useState(null);
    const [skillLevel, setSkillLevel] = useState(null);

    function sportCallback (sport) {
        setSelectedSport(sport);
        parentSportCallback(sport);
    };

    function skillLevelCallback (skillLevel) {
        setSkillLevel(skillLevel);
        parentSkillLevelCallback(skillLevel);
    }

    return(
        <>
            <div id="in-master">
                <span>Search By: </span>
                <IndexSportFilter parentCallback={sportCallback}/>
                <IndexSkillLevelFilter parentCallback={skillLevelCallback}/>
            </div>
        </>
    )
}

export default IndexNav;