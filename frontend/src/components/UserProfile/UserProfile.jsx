import { useState } from "react";

const UserProfile = ({ userData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userData?.email);
  const [username, setUsername] = useState(userData?.username);
  const [bio, setBio] = useState("");
  const [borough, setBorough] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [faveSport, setFaveSport] = useState();
  const [otherSport, setOtherSport] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleBoroughChange = (e) => {
    setBorough(e.target.value);
  };

  const handleFaveSportChange = (e) => {
    const selectedValue = e.target.value;
    setFaveSport(selectedValue);
    if (selectedValue === "other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  const handleOtherSportChange = (e) => {
    setOtherSport(e.target.value);
    setFaveSport(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (sessionUser) {
  //     const userInfo = {
  //       name,
  //       email,
  //       username,
  //       bio,
  //       borough,
  //       address,
  //       profilePic,
  //       faveSport,
  //       // skillLevel
  //     };
  //   }
  // };

  return (
    <>
      <h2>Account Information</h2>
      <div id="up-information">
        <div id="up-name">
          Name:
          <br></br>
          <input type="text" id="up-name"></input>
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

        <div id="up-address">
          Address:
          <br></br>
          <input id="up-street" placeholder="street information"></input>
          <br />
          <input id="up-city" placeholder="city"></input>
          <br />
          <input id="up-state" placeholder="State"></input>
          <br />
          <input id="up-zip" placeholder="zipcode"></input>
        </div>
        <br />
        <div id="up-borough">
          <label htmlFor="dropdown">Select your borough: </label>
          <select id="dropdown" value={borough} onChange={handleBoroughChange}>
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
        <div id="up-fave-sport">
          <label htmlFor="sport-dropdown">Favorite Sport: </label>
          <select
            id="sport-dropdown"
            value={faveSport}
            onChange={handleFaveSportChange}
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
          {faveSport === "other" && (
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
        <div>Profile Picture Upload</div>
      </div>
    </>
  );
};

export default UserProfile;
