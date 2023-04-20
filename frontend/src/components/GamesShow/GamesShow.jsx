import './gamesShow.css';
import { formatTime, formatMonth } from '../../utils/utils';
import { useSelector } from 'react-redux';


const GamesShow = ({game}) => {
    let user = useSelector((state) => (state.session?.user))
    
    if (!game) {
debugger
        return(null)
    }

    

    const joinGame = () => {
        game.attendees.push(user.username)
        debugger
    }

    return(
        <> 
            <div id="gs-master">
                <div id="gs-header">{game.sport[0].toUpperCase() + game.sport.slice(1)}</div>
                    <div id="gs-title">{game.title}</div>
                    <div id="gs-host">Hosted by: <span id="gs-peach">{game.host.username}</span></div>
                <div id="gs-content">
                    <div id="gs-left">
                        <div id="gs-date">
                            {formatMonth(game.date.month)} {game.date.day}, {game.date.year}
                        </div>
                        <div id="gs-time">
                            {formatTime(game.time.hours, game.time.minutes)}
                        </div>
                        <div id="gs-skill-level">
                            {game.skillLevel}
                        </div>
                        <div id="gs-description">
                            {game.description}
                        </div>
                        <div id="gs-spots-left">
                            Spots left: {game.maxCapacity - game.attendees.length}
                        </div>
                    </div>
                    <div id="gs-right">
                        <div onClick={joinGame}>Join Game</div>
                        <div>
                            Attendees:
                        </div>
                        {game.attendees.map(attendee => {
                            return <div key={attendee._id}>{attendee}</div>
                        })}

                    </div>
                </div>
            </div>
        </>
    )
};

export default GamesShow;