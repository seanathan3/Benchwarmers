import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { Modal } from "../../context/Modal";
import { useState, useEffect } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import { useParams } from "react-router";
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
  }, [])

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
      {user?.name && <div>Welcome back {user.name}!</div>}
      <div>Account Information:</div>
      <div id="up-info">
        {user?.name && <div>Name: {user.name}</div>}
        {user?.email && <div>Email: {user.email}</div>}
        {user?.username && <div>Username: {user.username}</div>}
        {user?.bio && <div>Bio: {user.bio}</div>}
        {user?.borough && <div>Borough: {user.borough}</div>}
        {user?.favoriteSport && <div>Favorite Sport: {user.favoriteSport}</div>}
        <br />
        {isCurrentUser && (
          <button className="updateProfile" onClick={handleClick}>
            Update Profile
          </button>
        )}
        {showUpdateUserProfileModal && (
          <Modal onClose={handleClose} >
            <UpdateUserProfile onClose={handleClose} userData={user} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default UserShowPage;
