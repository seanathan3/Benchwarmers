import './gamesShow.css';

const GamesShow = ({game}) => {

    return(
        <> 
            <div id="gs-master">
                <div id="gs-header">{game.sport[0].toUpperCase() + game.sport.slice(1)}</div>
                <div id="gs-content">
                    <div id="gs-host">Hosted by: {game.host.username}</div>
                </div>
            </div>
        </>
    )
};

export default GamesShow;