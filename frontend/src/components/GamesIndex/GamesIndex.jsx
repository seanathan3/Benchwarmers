import IndexList from "./IndexList";
import IndexNav from "./indexNav";
import Map from "../Map/Map";
import './gamesIndex.css';


const GamesIndex = () => {

    return(
        <>
            <div id="gi-master">
                <IndexNav />
                <div id="gi-content">
                    <IndexList />
                    <Map />
                </div>
            </div>
        </>
    )
};

export default GamesIndex;