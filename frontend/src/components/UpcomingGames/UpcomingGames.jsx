import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useParams } from "react-router";
import { useEffect } from "react";
import './UpcomingGames.css'
import { getFilteredGames, fetchGames } from "../../store/games";
import IndexItem from "../GamesIndex/IndexItem";


const UpcomingGames = () => {
  const dispatch = useDispatch();
  // const { userId } = useParams();
  // const isCurrentUser = (userId === sessionUser?._id);
  const getUpcomingGames = state => {
    const games = state.games ? Object.values(state.games) : []
    const user = state.session.user
    const upcomingGames = games.filter((game) => (game.attendees.includes(user.username)))
    return upcomingGames
}

const upcomingGames = useSelector(getUpcomingGames);
  
  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])

  return (
    
    <>

    <div id='scroll-wrapper'>Upcoming Games:
    <br />
    <br />
      {/* <label id='ug-title'>Upcoming Games:</label> */}
    <div id='upcoming'>
      <div id='ug-card-container'>
        {
          upcomingGames.map((game) => {
            // return <IndexItem key={game._id} game={game} />
            return <IndexItem game={game} />
          })
        }
      </div>
      </div>
    </div>
    </>
  )

};

export default UpcomingGames;