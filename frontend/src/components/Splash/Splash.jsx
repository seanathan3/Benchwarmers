import { useDispatch, useSelector } from 'react-redux'
import './splash.css';
import { useEffect } from 'react';
import { fetchGames } from '../../store/games';
import IndexItem from '../GamesIndex/IndexItem';
import MiniForm from '../MiniForm/MiniForm';
import Typewriter from 'typewriter-effect'
import HeroSection from '../HeroSection/HeroSection';

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

                <HeroSection />
                </div>
                <div id="s-content-container">
                    <div id="s-content">
                        <div id="s-upcoming-games">
                            <div className="sc-header">Featured Games:</div>
                            {games.slice(2, 5).map(game => {
                                return <IndexItem game={game} />
                            })}
                        </div>
                        <div id="s-create-game">
                            <div className="sc-header">Create a Game:</div>
                            <MiniForm />
                        </div>
                    </div>

                </div>
            </div>
            <div id="s-hs-cover">
                <Typewriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .typeString('The ball is in their court.')
                .pauseFor(500)
                .deleteChars(12)
                .typeString('YOUR court.')
                .pauseFor(2000)
                .start();
            }}
            />
            </div>
        </>
    )
};

export default Splash;