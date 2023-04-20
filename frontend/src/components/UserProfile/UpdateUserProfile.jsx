import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/user";
import SubmitButton from "../Button/SubmitButton";
import './UpdateUserProfileForm.css'
import { removeSessionErrors } from "../../store/session";

const UpdateUserProfile = ({ onClose, userData }) => {
  const [name, setName] = useState(userData?.name);
  const [email, setEmail] = useState(userData?.email);
  const [username, setUsername] = useState(userData?.username);
  const [bio, setBio] = useState(userData?.bio);
  const [borough, setBorough] = useState(userData?.borough);
  const [favoriteSport, setFavoriteSport] = useState(userData?.favoriteSport);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const errors = useSelector(state => state?.sessionErrors)
  const [showUpdateUserProfileModal, setUpdateUserProfileModal] =
    useState(false);

  const handleBoroughChange = (e) => {
    setBorough(e.target.value);
  };

  const handleFavoriteSportChange = (e) => {
    const selectedValue = e.target.value;
    setFavoriteSport(selectedValue);
  };

  // const handleUpdateUserProfileModalClose = () => {
  //   setUpdateUserProfileModal(false);
  // };

  useEffect(() => {
    return () => {
        dispatch(removeSessionErrors());
    };
}, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const userInfo = {
        _id: userData._id,
        name,
        email,
        username,
        bio,
        borough,
        favoriteSport,
        // profilePicUrl,
      };
      dispatch(userActions.updateUser(userInfo)).then((res) => {
        // handleUpdateUserProfileModalClose();
        if(res.type === 'users/RECEIVE_USER') {
          onClose();
        }
      });
    }
  };

  return (
    <>
      <div id="up-information">
        <br />
        <br />
        <form className="updateUserProfile" onSubmit={handleSubmit}>
          <div id="up-name">
            {errors?.name && <div className="errors">{errors?.name}</div>}
            <label>Name: 
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            </label>
          </div>
        <br />

          <div id="up-email">
          {errors?.email && <div className="errors">{errors?.email}</div>}
            <label>
            Email:
            <br></br>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            </label>
          </div>
        <br />

          <div id="up-username">
          {errors?.username && <div className="errors">{errors?.username}</div>}
            <label>
            Username:
            <br></br>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            </label>
          </div>
        <br />

          <div id="up-bio">
            <label>
            Bio:
            <br></br>
            <textarea
            id='bio'
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            </label>
          </div>
          <br />
          <div id="up-borough">
          {errors?.borough && <div className="errors">{errors?.borough}</div>}
            <label htmlFor="dropdown">Select your borough: </label>
            <br />
            <select
              id="dropdown"
              value={borough}
              onChange={handleBoroughChange}
            >
              <option value="" disabled defaultValue>
                Select
              </option>
              <option value="Bronx">Bronx</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Queens">Queens</option>
              <option value="Staten-Island">Staten Island</option>
            </select>
          </div>
          <br />

          <div id="up-fave-sport">
          {errors?.favoriteSport && <div className="errors">{errors?.favoriteSport}</div>}
            <label htmlFor="sport-dropdown">Favorite Sport: </label>
            <br />
            <select
              id="sport-dropdown"
              value={favoriteSport}
              onChange={handleFavoriteSportChange}
            >
              <option value="" disabled defaultValue>
                Select
              </option>
              <option value="Badminton">Badminton</option>
              <option value="Baseball">Baseball</option>
              <option value="Basketball">Basketball</option>
              <option value="Cycling">Cycling</option>
              <option value="Darts">Darts</option>
              <option value="Fencing">Fencing</option>
              <option value="Football">Football</option>
              <option value="Golf">Golf</option>
              <option value="Hand-Ball">Hand Ball</option>
              <option value="Hockey">Hockey</option>
              <option value="Martial-Arts">Martial Arts</option>
              <option value="Soccer">Soccer</option>
              <option value="Softball">Softball</option>
              <option value="Table-Tennis">Table Tennis</option>
              <option value="Tennis">Tennis</option>
              <option value="Volleyball">Volleyball</option>
            </select>
          </div>
          <br />
          <br />
          <SubmitButton className="updateButton" clickFunction={handleSubmit} textContext='Update Profile' />
        </form>
      </div>
    </>
  );
};

export default UpdateUserProfile;
