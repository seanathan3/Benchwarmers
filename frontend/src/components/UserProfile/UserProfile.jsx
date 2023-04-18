import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/user";
import closeButton from "./close-24.png";

const UserProfile = ({ onClose, userData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userData?.email);
  const [username, setUsername] = useState(userData?.username);
  const [bio, setBio] = useState("");
  const [borough, setBorough] = useState("");
  const [profilePicUrl, setProfilePic] = useState();
  const [favoriteSport, setFavoriteSport] = useState();
  const [otherSport, setOtherSport] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [showUpdateUserProfileModal, setUpdateUserProfileModal] =
    useState(false);

  const handleBoroughChange = (e) => {
    setBorough(e.target.value);
  };

  const handleFavoriteSportChange = (e) => {
    const selectedValue = e.target.value;
    setFavoriteSport(selectedValue);
    if (selectedValue === "other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  const handleOtherSportChange = (e) => {
    setOtherSport(e.target.value);
  };

  const handleUpdateUserProfileModalClose = () => {
    setUpdateUserProfileModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const userInfo = {
        id: userData.id,
        name,
        email,
        username,
        bio,
        borough,
        favoriteSport,
        profilePicUrl,
      };
      dispatch(userActions.updateUser(userInfo)).the(() => {
        handleUpdateUserProfileModalClose();
        onclose();
      });
    }
  };

  return (
    <>
      <div id="up-information">
        <div className="closeButton">
          <img
            src={closeButton}
            alt="Close-Button"
            className="close-button"
            onClick={onClose}
          />
        </div>
        <form className="updateUserProfile" onSubmit={handleSubmit}>
          <div id="up-name">
            Name:
            <br></br>
            <input
              type="text"
              name="userName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div id="up-email">
            Email:
            <br></br>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div id="up-username">
            Username:
            <br></br>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div id="up-bio">
            Bio:
            <br></br>
            <textarea
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div id="up-borough">
            <label htmlFor="dropdown">Select your borough: </label>
            <select
              id="dropdown"
              value={borough}
              onChange={handleBoroughChange}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="bronx">Bronx</option>
              <option value="brooklyn">Brooklyn</option>
              <option value="manhattan">Manhattan</option>
              <option value="queens">Queens</option>
              <option value="staten-island">Staten Island</option>
            </select>
          </div>
          <br />

          <div id="up-fave-sport">
            <label htmlFor="sport-dropdown">Favorite Sport: </label>
            <select
              id="sport-dropdown"
              value={favoriteSport}
              onChange={handleFavoriteSportChange}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="badminton">Badminton</option>
              <option value="baseball">Baseball</option>
              <option value="basketball">Basketball</option>
              <option value="cycling">Cycling</option>
              <option value="darts">Darts</option>
              <option value="fencing">Fencing</option>
              <option value="football">Football</option>
              <option value="golf">Golf</option>
              <option value="hand-ball">Hand Ball</option>
              <option value="hockey">Hockey</option>
              <option value="martial-arts">Martial Arts</option>
              <option value="soccer">Soccer</option>
              <option value="softball">Softball</option>
              <option value="squash">Squash</option>
              <option value="table-tennis">Table Tennis</option>
              <option value="tennis">Tennis</option>
              <option value="volleyball">Volleyball</option>
              <option value="other">Other</option>
            </select>
            {favoriteSport === "other" && (
              <div>
                <label htmlFor="other-sport">Other: </label>
                <input
                  id="other-sport"
                  type="text"
                  value={otherSport}
                  onChange={handleOtherSportChange}
                />
              </div>
            )}
          </div>
          <br />
          <div>Profile Picture Upload</div>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
