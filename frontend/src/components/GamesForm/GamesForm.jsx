import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./GamesForm.css";
import {
  fetchGame,
  updateGame,
  removeGame,
  createGame,
} from "../../store/games";
import GamesFormMap from "../Map/GamesFormMap";
import { formFormatTime } from "../../utils/utils";
import { formFormatDate } from "../../utils/utils";
import { removeErrors } from "../../store/games";
import SubmitButton from "../Button/SubmitButton";

const GamesForm = ({game, formCallback, mfSport, mfSkillLevel}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.gameErrors);
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    // console.log(errors)

  const today = new Date();
  let year = today.getFullYear();

  const [header, setHeader] = useState("Create a Game");
  const [sport, setSport] = useState(mfSport ? mfSport : "");
  const [skillLevel, setSkillLevel] = useState(mfSkillLevel ? mfSkillLevel : "");
  const [description, setDescription] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [maxCapacity, setMaxCapacity] = useState("");
  const [minCapacity, setMinCapacity] = useState("");
  const [time, setTime] = useState("10:10");
  const [gameDate, setGameDate] = useState("2023-04-28");
  const [title, setTitle] = useState("");
  const [coords, setCoords] = useState({ lng: -73.97, lat: 40.77 });

  function getZeroDay(date) {
    return (date.getDate() < 10 ? "0" : "") + date.getDate();
  }

  function getZeroMonth(date) {
    if (date.toString().length === 1) {
      return "0" + date.toString();
    } else {
      return date.toString();
    }
  }

  let zeroDay = getZeroDay(today);
  let zeroMonth = getZeroMonth(today.getMonth() + 1);
  let formattedToday = `${year}-${zeroMonth}-${zeroDay}`;

  let user = useSelector((state) => state.session?.user);
  let gameId = game?._id;
  let userId;

  if (user) {
    userId = user._id;
  } else {
    userId = null;
  }

// debugger
  useEffect(() => {
    if (gameId) {
// debugger
      dispatch(fetchGame(gameId));
      setHeader("Edit Your Game");
      setSport(game?.sport);
      setDescription(game?.description);
      setMaxCapacity(game?.maxCapacity);
      setMinCapacity(game?.minCapacity);
      setSkillLevel(game?.skillLevel);
      setTitle(game?.title);
      setGameDate(formFormatDate(game?.date));
      setTime(formFormatTime(game?.time));

      return () => dispatch(removeErrors());
    }
  }, [dispatch, gameId]);

  // const routeChange = () => {
  //     let path = `/user-profile/${userId}`
  //     history.push(path)
  // }

  function changeSport(e) {
    setSport(e.target.value);
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function changeMaxCapacity(e) {
    setMaxCapacity(e.target.value);
  }

  function changeMinCapacity(e) {
    setMinCapacity(e.target.value);
  }

  function changeSkillLevel(e) {
    setSkillLevel(e.target.value);
  }

  function changeTime(e) {
    setTime(e.target.value);
  }

  function changeGameDate(e) {
    setGameDate(e.target.value);
  }

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGame = {
      sport,
      description,
      maxCapacity,
      minCapacity,
      skillLevel,
      title,
      date: {
        year: parseInt(gameDate.split("-")[0]),
        month: parseInt(gameDate.split("-")[1]),
        day: parseInt(gameDate.split("-")[2]),
      },
      time: {
        hours: parseInt(time.split(":")[0]),
        minutes: parseInt(time.split(":")[1]),
      },
      coordinates: { lat: coords?.lat, lng: coords?.lng },
    };

    newGame.host = userId;
    if (gameId) {
      newGame._id = gameId;
      dispatch(updateGame(newGame)).then((res) => {
        if (res.type === 'games/RECEIVE_GAME') {
          dispatch(removeErrors);
          formCallback();
        }
      })
    } else {
      dispatch(createGame(newGame)).then((res) => {
        console.log(res);
        if (res.type === "games/RECEIVE_GAME") {
          dispatch(removeErrors);
          formCallback();
        }
      });
    }
  }

    function handleCallback(coordinates) {
        setCoords(coordinates);
        debugger
        setShowModal(false);
        setEditModal(false);
    }

    // console.log(coords);

  return (
    <>
    <div id='scroller'>
      <form id="gf-master">
        <h1>{header}</h1>
        <div className="gf-item" v>
          <select value={sport} onChange={changeSport} id="gf-sport">
            <option defaultValue="Select Sport" disabled selected>
              Select Sport
            </option>
            <option value="Badminton">Badminton</option>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Cycling">Cycling</option>
            <option value="Darts">Darts</option>
            <option value="Fencing">Fencing</option>
            <option value="Football">Football</option>
            <option value="Golf">Golf</option>
            <option value="Handball">Handball</option>
            <option value="Hockey">Hockey</option>
            <option value="Martial arts">Martial Arts</option>
            <option value="Soccer">Soccer</option>
            <option value="Softball">Softball</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Tennis">Tennis</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {errors?.sport && <div className="errors">{errors?.sport}</div>}
        <div className="gf-item">
          <select
            value={skillLevel}
            onChange={changeSkillLevel}
            id="gf-skill-level"
          >
             <option value="" disabled selected>
              Skill Level
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        {errors?.skillLevel && (
          <div className="errors">{errors?.skillLevel}</div>
        )}
        <div className="gf-item">
          <input
            value={title}
            placeholder="Title"
            onChange={changeTitle}
            required
            type="input"
            id="gf-title"
          />
        </div>
        {errors?.title && <div className="errors">{errors?.title}</div>}
        <div className="gf-item">
          <input
            value={description}
            placeholder="Description"
            onChange={changeDescription}
            required
            type="textarea"
            id="gf-description"
          />
        </div>
        {errors?.description && (
          <div className="errors">{errors?.description}</div>
        )}
        <div className="gf-item">
          <input
            value={minCapacity}
            onChange={changeMinCapacity}
            required
            type="input"
            id="gf-min-capacity"
            placeholder="Min Capacity"
          />
        </div>
        {errors?.minCapacity && (
          <div className="errors">{errors?.minCapacity}</div>
        )}
        <div className="gf-item">
          <input
            value={maxCapacity}
            placeholder="Max Capacity"
            onChange={changeMaxCapacity}
            required
            type="input"
            id="gf-max-capacity"
          />
        </div>
        {errors?.maxCapacity && (
          <div className="errors">{errors?.maxCapacity}</div>
        )}
        <div className="gf-item">
          <input
            required
            value={time}
            onChange={changeTime}
            type="time"
            id="gf-time"
          />
        </div>
        {errors?.time && <div className="errors">{errors?.time}</div>}
        <div className="gf-item">
          <input
            value={gameDate}
            onChange={changeGameDate}
            required
            type="date"
            id="gf-date"
            min={formattedToday}
          />
        </div>
        {errors?.date && <div className="errors">{errors?.date}</div>}

        <div id='gf-map'>
        <GamesFormMap className="games-form-map" parentCallback={handleCallback}/>
        </div>
            <br />
            <br />
        <div id='cg-submit' >
            <SubmitButton clickFunction={handleSubmit} textContext='Submit' />
        </div>
      </form>
            </div>
    </>
  );
};

export default GamesForm;
