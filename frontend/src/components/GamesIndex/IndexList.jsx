import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchGames, fetchSportFilteredGames, resetGames } from '../../store/games';
import IndexItem from './IndexItem';

const IndexList = ({sport, skillLevel}) => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games ? Object.values(state.games) : []);
    console.log(skillLevel)

    useEffect(() => {
        if(sport && (!skillLevel || skillLevel === 'All') && sport !== "All") {
            dispatch(resetGames())
            dispatch(fetchSportFilteredGames(sport))
        } else if (skillLevel && (!sport || sport === 'All') && skillLevel !== "All") {
            dispatch(resetGames())
            dispatch(fetchSportFilteredGames(null, skillLevel))
        } else if (sport && skillLevel && sport !== 'All' && skillLevel !== 'All') {
            dispatch(resetGames())
            dispatch(fetchSportFilteredGames(sport, skillLevel))
        } else {
            dispatch(fetchGames());
        }   
    }, [dispatch, sport, skillLevel])
    

    return(
        <>
            <div id="il-master">
                <div id='il-title'>Upcoming Games:</div>
                {games.length === 0 && <p>"No Results Found"</p>}
                {games.map(game => {
                    return <IndexItem key={game._id} game={game} />
                })}
            </div>
        </>
    )
};

export default IndexList;