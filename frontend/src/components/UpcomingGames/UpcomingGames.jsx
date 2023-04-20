import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useParams } from "react-router";
import { useEffect } from "react";
import './UpcomingGames.css'
import IndexItem from "../GamesIndex/IndexItem";
import { getFilteredGames } from "../../store/games";

const UpcomingGames = () => {
  const dispatch = useDispatch();
  const getSessionUser = state => state.session.user
  const sessionUser = useSelector(getSessionUser)
  const { userId } = useParams();
  const user = useSelector(getUser(userId));
  const isCurrentUser = (userId === sessionUser?._id);
  const filteredGames = useSelector(getFilteredGames(userId))

  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [userId, dispatch])

  return (
    <div id='upcoming'>
      <h2 id='ug-title'>Upcoming Games:</h2>
      <div id='ug-card-container'>
        {
          filteredGames.map((game) => {
            return <IndexItem key={game._id} game={game} />
          })
        }
      </div>
    </div>
  )

};

export default UpcomingGames;