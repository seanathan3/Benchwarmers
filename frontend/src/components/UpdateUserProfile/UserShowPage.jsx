import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { Modal } from "../../context/Modal";
import { useState, useEffect } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import { useParams } from "react-router";
import './UserProfile.css'

const UserShowPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { userId } = useParams();
  const user = useSelector(getUser(userId));
  const isCurrentUser = userId === sessionUser?.id;
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
          <Modal>
            <UpdateUserProfile onClose={handleClose} userData={user} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default UserShowPage;
