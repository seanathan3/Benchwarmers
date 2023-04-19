import './gamesShow.css';
import { formatTime } from '../../utils/utils';


const GamesShow = ({game}) => {
    if (!game) {
        return(null)
    }

    return(
        <> 
            <div id="gs-master">
                <div id="gs-header">{game.sport[0].toUpperCase() + game.sport.slice(1)}</div>
                <div id="gs-content">
                    <div id="gs-title">{game.title}</div>
                    <div id="gs-host">Hosted by: <span id="gs-game-host">{game.host.username}</span></div>
                    <div id="gs-game-time">
                    {game.date.month}/{game.date.day}/{game.date.year} @
                    {formatTime(game.time.hours, game.time.minutes)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default GamesShow;