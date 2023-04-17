import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchGames } from '../../store/games';
import IndexItem from './IndexItem';

const IndexList = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games ? Object.values(state.games) : []);

    useEffect(() => {
        dispatch(fetchGames());
    }, [])
    

    return(
        <>
            {games.map(game => {
                return <IndexItem game={game} />
            })}
        </>
    )
};

export default IndexList;