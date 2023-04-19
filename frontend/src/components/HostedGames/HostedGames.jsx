import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useParams } from "react-router";
import { useEffect } from "react";
import './HostedGames.css'

const HostedGames = () => {
  const dispatch = useDispatch();
  const getSessionUser = state => state.session.user
  const sessionUser = useSelector(getSessionUser)
  const { userId } = useParams();
  const user = useSelector(getUser(userId));
  const isCurrentUser = (userId === sessionUser?._id);

  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [userId, dispatch])

  return (
    <div id='hosted'>
      <h2>helloworld</h2>
    </div>
  )

};

export default HostedGames;