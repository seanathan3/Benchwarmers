import { useState } from 'react';
import { Modal } from '../../context/Modal';
import GamesShow from '../GamesShow/GamesShow';
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
        case 'badminton':
            image = badmintonImg;
            break;
        case 'baseball':
            image = baseballImg;
            break;
        case 'basketball':
            image = basketballImg;
            break;
        case 'cycling':
            image = cyclingImg;
            break;
        case 'darts':
            image = dartsImg;
            break;
        case 'fencing':
            image = fencingImg;
            break;
        case 'football':
            image = footballImg;
            break;
        case 'golf':
            image = golfImg;
            break;
        case 'hand ball':
            image = handBallImg;
            break;
        case 'hockey':
            image = hockeyImg;
            break;
        case 'martial arts':
            image = martialArtsImg;
            break;
        case 'soccer':
            image = soccerImg;
            break;
        case 'softball':
            image = softballImg;
            break;
        case 'table tennis':
            image = tableTennisImg;
            break;
        case 'tennis':
            image = tennisImg;
            break;
        case 'volleyball':
            image = volleyballImg;
            break;
        default:
            image = otherImg;
            break;
    }


    return(
        <>
            <div id="ii-master" onClick={() => setShowModal(true)}>
                <img id="ii-image" src={image} alt="sports ball" />
                <div id="ii-desc">
                    <p id="ii-sport">{game.sport[0].toUpperCase() + game.sport.slice(1)}</p>
                    <p>Host: {game.host?.username}</p>
                    <p>{game.date.month}/{game.date.day}/{game.date.year} @ {game.time.hours}:{game.time.minutes}</p>
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