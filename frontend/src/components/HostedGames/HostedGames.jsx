import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getFilteredGames } from "../../store/games";
import IndexItem from "../GamesIndex/IndexItem";
import './HostedGames.css'

const HostedGames = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const filteredGames = useSelector(getFilteredGames(userId))

  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [userId, dispatch])

  return (
     <div id='hg-scroll-wrapper'>Your Games:
     <br />
     <br />
    <div id='hosted'>
      {/* <h2 id='hg-title'>Your Games:</h2> */}
      <div id='hg-card-container'>
        {
          filteredGames.map((game) => {
            return <IndexItem key={game._id} game={game} />
          })
        }
      </div>
      </div>
    </div>
  )

};

export default HostedGames;