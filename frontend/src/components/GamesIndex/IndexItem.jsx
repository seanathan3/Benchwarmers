
const IndexItem = ({game}) => {

    return(
        <div id="ii-master">
            <p>ID: {game._id}</p>
            <p>Sport: {game.sport}</p>
            <p>Location: {game.coordinates.lat}, {game.coordinates.lng}</p>
            <p>---------------------------</p>
        </div>
    )
};

export default IndexItem;