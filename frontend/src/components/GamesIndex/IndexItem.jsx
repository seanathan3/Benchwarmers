import { useState } from 'react';
import { Modal } from '../../context/Modal';
import GamesShow from '../GamesShow/GamesShow';
import { formatTime } from '../../utils/utils';
import badmintonImg from '../../assets/sports-logos/badminton.png';
import baseballImg from '../../assets/sports-logos/baseball.png';
import basketballImg from '../../assets/sports-logos/basketball.png';
import cyclingImg from '../../assets/sports-logos/cycling.png';
import dartsImg from '../../assets/sports-logos/darts.png';
import fencingImg from '../../assets/sports-logos/fencing.png';
import footballImg from '../../assets/sports-logos/football.png';
import golfImg from '../../assets/sports-logos/golf.png';
import handBallImg from '../../assets/sports-logos/hand_ball.png';
import hockeyImg from '../../assets/sports-logos/hockey.png';
import martialArtsImg from '../../assets/sports-logos/martial_arts.png';
import otherImg from '../../assets/sports-logos/other.png';
import soccerImg from '../../assets/sports-logos/soccer.png';
import softballImg from '../../assets/sports-logos/softball.png';
import tableTennisImg from '../../assets/sports-logos/table_tennis.png';
import tennisImg from '../../assets/sports-logos/tennis.png';
import volleyballImg from '../../assets/sports-logos/volleyball.png';


const IndexItem = ({game}) => {
    const [showModal, setShowModal] = useState(false);

    let image;

    switch (game.sport) {
        case 'Badminton':
            image = badmintonImg;
            break;
        case 'Baseball':
            image = baseballImg;
            break;
        case 'Basketball':
            image = basketballImg;
            break;
        case 'Cycling':
            image = cyclingImg;
            break;
        case 'Darts':
            image = dartsImg;
            break;
        case 'Fencing':
            image = fencingImg;
            break;
        case 'Football':
            image = footballImg;
            break;
        case 'Golf':
            image = golfImg;
            break;
        case 'Handball':
            image = handBallImg;
            break;
        case 'Hockey':
            image = hockeyImg;
            break;
        case 'Martial arts':
            image = martialArtsImg;
            break;
        case 'Soccer':
            image = soccerImg;
            break;
        case 'Softball':
            image = softballImg;
            break;
        case 'Table Tennis':
            image = tableTennisImg;
            break;
        case 'Tennis':
            image = tennisImg;
            break;
        case 'Volleyball':
            image = volleyballImg;
            break;
        default:
            image = otherImg;
            break;
    }


    if (!game) {
        return (null)
    }


    return(
        <>
            <div id="ii-master" onClick={() => setShowModal(true)}>
                <img id="ii-image" src={image} alt="sports ball" />
                <div id="ii-desc">
                    <p id="ii-sport">{game.sport[0].toUpperCase() + game.sport.slice(1)}</p>
                    <p>Host: {game.host?.username}</p>
                    <p>{game.date.month}/{game.date.day}/{game.date.year} @ {formatTime(game.time.hours, game.time.minutes)}</p>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <GamesShow game={game} />
                </Modal>
            )}
        </>

    )
};

export default IndexItem;