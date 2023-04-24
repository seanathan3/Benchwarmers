import './gamesShow.css';
import { formatTime, formatMonth } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import SubmitButton from '../Button/SubmitButton';
import { updateGame } from '../../store/games';


const GamesShow = ({game}) => {
    let user = useSelector((state) => (state.session?.user))
    const dispatch = useDispatch()
    
    if (!game) {
        return(null)
    }

    

    const joinGame = () => {
        game.attendees.push(user.username)
        dispatch(updateGame(game))
    }

    return(
        <> 
            <div id="gs-master">
                <div id="gs-header">{game.sport[0].toUpperCase() + game.sport.slice(1)}</div>
                    <div id="gs-title">{game.title}</div>
                    <div id="gs-host">Hosted by: <span id="gs-peach">{game.host.username}</span></div>
                    <br />
                    <br />
                <div id="gs-content">
                    <div id="gs-left">
                        <div id="gs-date">
                        <span id='details'>When: </span>
                            {formatMonth(game.date.month)} {game.date.day}, {game.date.year}
                        </div>
                        <div id="gs-time">
                            {formatTime(game.time.hours, game.time.minutes)}
                        </div>
                        <div id="gs-skill-level">
                        <span id='details'>Skill Level: </span>
                            {game.skillLevel}
                        </div>
                        <div id="gs-description">
                            <span id='details'>Details: </span>
                            {game.description}
                        </div>
                        <br />
                        <div>
                        <span id='details'>Attendees: </span>
                        </div>
                        <ul id="gs-ul">
                            {game.attendees.map(attendee => {
                                return <li key={attendee}>{attendee}</li>
                            })}
                        </ul>
                        <div id="gs-spots-left">
                            Spots left: {game.maxCapacity - game.attendees.length}
                        </div>
                    </div>
                    <div id='jg-button'>
                    {user?._id === undefined || game.attendees.includes(user?.username) ? null : <SubmitButton clickFunction={joinGame} textContext='Join Game' />}
                    {/* <SubmitButton clickFunction={joinGame} textContext='Join Game' />    */}
                    </div>
                    {/* <div id="gs-right">
                        <div onClick={joinGame}>Join Game</div>

                    </div> */}
                </div>
            </div>
        </>
    )
};

export default GamesShow;