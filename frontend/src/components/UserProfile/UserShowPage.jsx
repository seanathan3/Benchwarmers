import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { Modal } from "../../context/Modal";
import { useState, useEffect } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import { useParams } from "react-router";
import SubmitButton from "../Button/SubmitButton";
import UpcomingGames from "../UpcomingGames/UpcomingGames";
import HostedGames from "../HostedGames/HostedGames";
import './UserProfile.css'

const UserShowPage = () => {
  const dispatch = useDispatch();
  const getSessionUser = state => state.session.user
  const sessionUser = useSelector(getSessionUser);
  const { userId } = useParams();
  const user = useSelector(getUser(userId));
  const isCurrentUser = (userId === sessionUser?._id);
  const [showUpdateUserProfileModal, setUpdateUserProfileModal] =
    useState(false);

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
   
  return (
    <>
      {user?.name && <h1 id='welcome'>Welcome back {user.username}!</h1>}
      <h2 className="A-I">Account Information:</h2>
      <br />
      <div id="up-info">
        {user?.name && <div>Name: {user.name}</div>}
        <br />
        {user?.email && <div>Email: {user.email}</div>}
        <br />
        {user?.username && <div>Username: {user.username}</div>}
        <br />
        {user?.bio && <div>Bio: {user.bio}</div>}
        <br />
        {user?.borough && <div>Borough: {user.borough}</div>}
        <br />
        {user?.favoriteSport && <div>Favorite Sport: {user.favoriteSport}</div>}
        <br />
        <br />
        <br />
        <br />
        <div className="up-button">
        {isCurrentUser && (
          <SubmitButton id="updateProfile" clickFunction={handleClick} textContext='Update Profile' />
        )}
        {showUpdateUserProfileModal && (
          <Modal onClose={handleClose} >
            <UpdateUserProfile onClose={handleClose} userData={user} />
          </Modal>
        )}
        </div>
      </div>
        <UpcomingGames/>
        <HostedGames/>
    </>
  );
};

export default UserShowPage;
