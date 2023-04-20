import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './GamesForm.css';
import { fetchGame, updateGame, removeGame, createGame } from '../../store/games';
import GamesFormMap from '../Map/GamesFormMap';
import { formFormatTime } from '../../utils/utils';
import { formFormatDate } from '../../utils/utils';

const GamesForm = (game) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.gameErrors);
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    // console.log(errors)

    const today = new Date();
    let year = today.getFullYear();

    const [header, setHeader] = useState('Create a Game')
    const [sport, setSport] = useState('Badminton');
    const [skillLevel, setSkillLevel] = useState('Beginner');
    const [description, setDescription] = useState('');
    // const [attendees, setAttendees] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [minCapacity, setMinCapacity] = useState(0);
    const [time, setTime] = useState("10:10")
    const [gameDate, setGameDate] = useState("2020-04-20")
    const [title, setTitle] = useState('');
    const [coords, setCoords] = useState({});

    function getZeroDay(date){
        return (date.getDate() < 10 ? '0' : '') + date.getDate();
    }

    function getZeroMonth(date) {
        if(date.toString().length === 1) {
            return '0' + date.toString()
        } else {
            return date.toString()
        }
    }
    
    let zeroDay = getZeroDay(today);
    let zeroMonth = getZeroMonth(today.getMonth() + 1)
    let formattedToday = `${year}-${zeroMonth}-${zeroDay}`;


    let user = useSelector((state) => (state.session?.user))
    let gameId = game?.game?._id
    let userId

    if(user){
        userId = user._id
    } else {
        userId = null
    }

    useEffect(() => {
        if(gameId) {
            dispatch(fetchGame(gameId))
            setHeader('Edit Your Game')
            // setSport(props.game.sport)
            // setDescription(props.game.description)
            // setMaxCapacity(props.game.maxCapacity)
            // setMinCapacity(props.game.minCapacity)
            // setSkillLevel(props.game.skillLevel)
            // setTitle(props.game.title)

            setSport(game?.game.sport)
            setDescription(game?.game.description)
            setMaxCapacity(game?.game.maxCapacity)
            setMinCapacity(game?.game.minCapacity)
            setSkillLevel(game?.game.skillLevel)
            setTitle(game?.game.title)
            setGameDate(formFormatDate(game?.game.date))
            setTime(formFormatTime(game?.game.time))
        }
    }, [dispatch, gameId])


    // const routeChange = () => {
    //     let path = `/user-profile/${userId}`
    //     history.push(path)
    // }

    function changeSport(e) {
        setSport(e.target.value)
    }

    function changeDescription(e){
        setDescription(e.target.value)
    }

    function changeMaxCapacity(e){
        setMaxCapacity(e.target.value)
    }

    function changeMinCapacity(e){
        setMinCapacity(e.target.value)
    }

    function changeSkillLevel(e){
        setSkillLevel(e.target.value)
    }

    function changeTime(e){
        setTime(e.target.value)
    }

    function changeGameDate(e){
        setGameDate(e.target.value)
    }

    function changeTitle(e){
        setTitle(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const newGame = {
            sport,
            description,
            maxCapacity,
            minCapacity,
            skillLevel,
            title,
            date: { year: parseInt(gameDate.split("-")[0]), month: parseInt(gameDate.split("-")[1]), day: parseInt(gameDate.split("-")[2]) },
            time: { hours: parseInt(time.split(":")[0]), minutes: parseInt(time.split(":")[1]) },
            coordinates: { lat: coords?.lat, lng: coords?.lng }
        }

        newGame.host = userId
        if(gameId){
            newGame._id = gameId
            dispatch(updateGame(newGame))
        } else{
            dispatch(createGame(newGame))
        }
        // routeChange()
    }

    function handleCallback(coordinates) {
        setCoords(coordinates);
        setShowModal(false);
        setEditModal(false);
    }

    // console.log(coords);

    return (
        <>
        <form>
            <h1>{header}</h1>
            { errors?.sport && <div className='errors'>{errors?.sport}</div>}
            <label> Sport
                <select value={sport} onChange={changeSport} id='gf-sport'>
                    <option value='Badminton'>Badminton</option>
                    <option value='Baseball'>Baseball</option>
                    <option value='Basketball'>Basketball</option>
                    <option value='Cycling'>Cycling</option>
                    <option value='Darts'>Darts</option>
                    <option value='Fencing'>Fencing</option>
                    <option value='Football'>Football</option>
                    <option value='Golf'>Golf</option>
                    <option value='Handball'>Handball</option>
                    <option value='Hockey'>Hockey</option>
                    <option value='Martial arts'>Martial Arts</option>
                    <option value='Soccer'>Soccer</option>
                    <option value='Softball'>Softball</option>
                    <option value='Table Tennis'>Table Tennis</option>
                    <option value='Tennis'>Tennis</option>
                    <option value='Volleyball'>Volleyball</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
            { errors?.skillLevel && <div className='errors'>{errors?.skillLevel}</div>}
            <label> Skill Level
                <select value={skillLevel} onChange={changeSkillLevel} id='gf-skill-level'>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Advanced'>Advanced</option>
                </select>
            </label>
            { errors?.description && <div className='errors'>{errors?.description}</div>}
            <label> Description
                <input value={description} onChange={changeDescription} required type='textarea' id='gf-description' />
            </label>
            { errors?.minCapacity && <div className='errors'>{errors?.minCapacity}</div>}
            <label> Min Capacity
                <input value={minCapacity} onChange={changeMinCapacity} required type='input' id='gf-min-capacity' />
            </label>
            { errors?.maxCapacity && <div className='errors'>{errors?.maxCapacity}</div>}
            <label> Max Capacity
                <input value={maxCapacity} onChange={changeMaxCapacity} required type='input' id='gf-max-capacity' />
            </label>
            { errors?.time && <div className='errors'>{errors?.time}</div>}
            <label> Time
                <input required value={time} onChange={changeTime} type='time' id='gf-time' />
            </label>
            { errors?.date && <div className='errors'>{errors?.date}</div>}
            <label> Date
                <input value={gameDate} onChange={changeGameDate} required type='date' id='gf-date' min={formattedToday} />
            </label>
            { errors?.title && <div className='errors'>{errors?.title}</div>}
            <label>Title
                <input value={title} onChange={changeTitle} required type='input' id='gf-title' />
            </label>
            <label> Submit
                <input type='submit' onClick={handleSubmit} id='gf-submit' />
            </label>

            <GamesFormMap parentCallback={handleCallback} />
        </form>
        </>
    );
}

export default GamesForm