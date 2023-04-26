import IndexSportFilter from "./indexSportFilter";
import { useState } from "react";

const IndexNav = ({parentCallback}) => {
    const [selectedSport, setSelectedSport] = useState(null);

    function myCallback (sport) {
        setSelectedSport(sport);
        // console.log(sport)
        parentCallback(sport);
    };

    return(
        <>
            <div id="in-master">
                <span>Search By: </span>
                <IndexSportFilter parentCallback={myCallback}/>
            </div>
        </>
    )
}

export default IndexNav;