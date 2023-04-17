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
  const [selectedOption, setSelectedOption] = useState();
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
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
          <input type="text" id="up-name"></input>
        </div>
        <div id="up-email">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div id="up-username">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div id="up-bio">
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div> Address
        <div id="up-address">
          <input id="up-street" placeholder="street number"></input>
          <input id="up-city" placeholder="city"></input>
          <input id="up-state" placeholder="State"></input>
          <input id="up-zip" placeholder="zipcode"></input>
        </div>
        <div id="up-borough">
          <label htmlFor="dropdown">Select your borough</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="bronx">Bronx</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
            <option value="staten-island">Staten Island</option>
          </select>
        </div>
        <div id="up-fave-sport">
          <label htmlFor="dropdown">Favorite Sport</label>
          <select
            id="sport-dropdown"
            value={selectedOption}
            onChange={setFaveSport}
          >
            <option value="badminton">Badminton</option>
            <option value="baseball">Baseball</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
            <option value="staten-island">Staten Island</option>
          </select>
        </div>
        <div>
          <label>Choose your favorite sport:</label>
          <div>
            <input
              type="checkbox"
              id="football"
              value="football"
              checked={checkedItems.includes("football")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="football">Footbll</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="baseball"
              value="baseball"
              checked={checkedItems.includes("baseball")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="baseball">Baseball</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="basketball"
              value="basketball"
              checked={checkedItems.includes("basketball")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="basketball">Basketball</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tennis"
              value="tennis"
              checked={checkedItems.includes("tennis")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="tennis">Tennis</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="soccer"
              value="soccer"
              checked={checkedItems.includes("soccer")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="soccer">Soccer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="softball"
              value="softball"
              checked={checkedItems.includes("softball")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="softball">Softball</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="badminton"
              value="badmi"
              checked={checkedItems.includes("badminton")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="badminton">Badminton</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="volleyball"
              value="volleyball"
              checked={checkedItems.includes("volleyball")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="volleyball">Volleyball</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cycling"
              value="cycling"
              checked={checkedItems.includes("cycling")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="cycling">Cycling</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="darts"
              value="darts"
              checked={checkedItems.includes("darts")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="darts">Darts</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fencing"
              value="fencing"
              checked={checkedItems.includes("fencing")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="fencing">Fencing</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="golf"
              value="golf"
              checked={checkedItems.includes("golf")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="golf">Golf</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hand-ball"
              value="hand-ball"
              checked={checkedItems.includes("hand-ball")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="hand-ball">Hand Ball</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hockey"
              value="hockey"
              checked={checkedItems.includes("hockey")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="hockey">Hockey</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="martial-arts"
              value="martial-arts"
              checked={checkedItems.includes("martial-arts")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="martial-arts">Martial Arts</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="squash"
              value="squash"
              checked={checkedItems.includes("squash")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="squash">Squash</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="table-tennis"
              value="table-tennis"
              checked={checkedItems.includes("table-tennis")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="table-tennis">Table Tennis</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="other"
              value="other"
              checked={checkedItems.includes("other")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="other">Other</label>
          </div>
          <div>Profile Picture Upload</div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
