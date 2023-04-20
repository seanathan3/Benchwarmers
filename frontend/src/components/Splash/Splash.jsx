import { useDispatch, useSelector } from 'react-redux'
import './splash.css';
import { useEffect } from 'react';
import { fetchGames } from '../../store/games';
import IndexItem from '../GamesIndex/IndexItem';
import MiniForm from '../MiniForm/MiniForm';
import Typewriter from 'typewriter-effect'

const Splash = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games))

    useEffect(() => {
        dispatch(fetchGames());
    }, [])


    return(
        <>
            <div id="s-master">
                <div id="s-heroSection">
                <Typewriter
  onInit={(typewriter) => {
    typewriter
      .pauseFor(1000)
      .typeString('The ball is in your court.')
      .pauseFor(500)
      .deleteChars(11)
      .typeString('MY court :)')
      .pauseFor(2000)
      .start();
  }}
/>
                </div>
                <div id="s-content">
                    <div id="s-upcoming-games">
                        <div className="sc-header">Featured Games:</div>
                        {games.slice(0, 3).map(game => {
                            return <IndexItem game={game} />
                        })}
                    </div>
                    <div id="s-create-game">
                        <div className="sc-header">Create a Game:</div>
                        <MiniForm />
                    </div>
                </div>
            </div>   
        </>
    )
};

export default Splash;