import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { Modal } from "../../context/Modal";
import { useState, useEffect } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import { useParams } from "react-router";
import SubmitButton from "../Button/SubmitButton";
import UpcomingGames from "../UpcomingGames/UpcomingGames";
import HostedGames from "../HostedGames/HostedGames";
import { deleteUser } from "../../store/user";
import { useHistory } from "react-router-dom";
import './UserShowPage.css'
import { logout } from "../../store/session";


const UserShowPage = () => {
  const dispatch = useDispatch();
  const getSessionUser = state => state.session.user
  const sessionUser = useSelector(getSessionUser);
  const { userId } = useParams();
  const user = useSelector(getUser(userId));
  const isCurrentUser = (userId === sessionUser?._id);
  const [showUpdateUserProfileModal, setUpdateUserProfileModal] =
    useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [userId, dispatch])

  const openUpdateUserProfileModal = () => {
    setUpdateUserProfileModal(true);
  };

  const handleClick = () => {
    openUpdateUserProfileModal();
  };

  const handleClose = () => {
    setUpdateUserProfileModal(false);
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    dispatch(deleteUser(userId));
    dispatch(logout());
    history.push(`/`)
  }
   
  return (
    <>
    <div id='user-page'>
      {user?.name && <label id='welcome'>Welcome back {user.username}!</label>}
      <br />
    <div id="user-info">
      <div id="up-info">
      <h2 id="welcome-AI">Account Information:</h2>
      <br />
      <br />
        {user?.name && <div> <label id='title'>Name: </label>{user.name}</div>}
        <br />
        {user?.email && <div><label id='title'>Email: </label>{user.email}</div>}
        <br />
        {user?.username && <div><label id='title'>Username: </label>{user.username}</div>}
        <br />
        {user?.bio && <div><label id='title'>Bio: </label>{user.bio}</div>}
        <br />
        {user?.borough && <div><label id='title'>Borough: </label>{user.borough}</div>}
        <br />
        {user?.favoriteSport && <div><label id='title'>Favorite Sport: </label>{user.favoriteSport}</div>}
        <br />
        <br />
        <div className="up-button">
        {isCurrentUser && (
          <SubmitButton id="updateProfile" clickFunction={handleClick} textContext='Update Profile' />
        )}
        {showUpdateUserProfileModal && (
          <Modal onClose={handleClose} >
            <UpdateUserProfile id='update-user'onClose={handleClose} userData={user} />
          </Modal>
        )}
        </div>
        <br />
        {isCurrentUser && (
        <SubmitButton id='delete-user' clickFunction={deleteAccount} textContext='Delete Account' />
        )}
      </div>
      </div>
      <div id='games'>
      <UpcomingGames/>
        <HostedGames/>
        </div>
        </div>
    </>
  );
};

export default UserShowPage;
