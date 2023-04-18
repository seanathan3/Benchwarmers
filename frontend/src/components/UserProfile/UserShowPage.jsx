import { useSelector } from "react-redux";
import { getUser } from "../../store/user";
import { Modal } from "../../context/Modal";


const UserShowPage = () => {
  const user = useSelector(getUser);
  const sessionUser = useSelector((state) => state.session.user);
  const isCurrentUser = user.id === sessionUser?.id;
  const [showUpdateUserProfileModal, setUpdateUserProfileModal] = useState(false)

  const openUpdateUserProfileModal = () => {
    setUpdateUserProfileModal(true)
  };

  const handleClick = () => {
    openUpdateUserProfileModal()
  };

  const handleClose = () => {
    setUpdateUserProfileModal(false)
  }


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
