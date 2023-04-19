import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './GamesForm.css';
import { fetchGame, updateGame, removeGame, createGame } from '../../store/games';


const GamesForm = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const today = new Date();
    let year = today.getFullYear();

    const [header, setHeader] = useState('Create a Game')
    const [sport, setSport] = useState('Badminton');
    const [skillLevel, setSkillLevel] = useState('Beginner');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [minCapacity, setMinCapacity] = useState(0);
    const [time, setTime] = useState('')
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [title, setTitle] = useState('');

// debugger
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
    let gameId = props.game?._id
    let userId

    if(user){
        userId = user._id
    } else {
        userId = null
    }
// debugger
    useEffect(() => {
        if(gameId) {
            dispatchEvent(fetchGame(gameId))
            setHeader('Edit Your Game')
            setSport(props.game.sport)
            setDescription(props.game.description)
            setMaxCapacity(props.game.maxCapacity)
            setMinCapacity(props.game.minCapacity)
            setSkillLevel(props.game.skillLevel)
            setTitle(props.game.title)
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

    function changeTitle(e){
        setTitle(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
// debugger
        const newGame = {
            sport,
            description,
            maxCapacity,
            minCapacity,
            skillLevel,
            title
        }

        newGame.host = userId
debugger
        if(gameId){
            newGame._id = gameId
            dispatch(updateGame(newGame))
        } else{
// debugger
            dispatch(createGame(newGame))
        }
        // routeChange()
    }


    return (
        <>
        <form>
            <h1>{header}</h1>
            <label> Sport
                <select value={sport} onChange={changeSport} id='gf-sport'>
                    <option value='Badminton'>Badminton</option>
                    <option value='Baseball'>Baseball</option>
                    <option value='Basketball'>Basketbal</option>
                    <option value='Cycling'>Cycling</option>
                    <option value='Darts'>Darts</option>
                    <option value='Fencing'>Fencing</option>
                    <option value='Football'>Football</option>
                    <option value='Golf'>Golf</option>
                    <option value='Handball'>Hand Ball</option>
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
            <label> Skill Level
                <select value={skillLevel} onChange={changeSkillLevel} id='gf-skill-level'>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Advanced'>Advanced</option>
                </select>
            </label>
            <label> Description
                <input value={description} onChange={changeDescription} required type='textarea' id='gf-description' />
            </label>
            <label> Min Capacity
                <input value={minCapacity} onChange={changeMinCapacity} required type='input' id='gf-min-capacity' />
            </label>
            <label> Max Capacity
                <input value={maxCapacity} onChange={changeMaxCapacity} required type='input' id='gf-max-capacity' />
            </label>
            <label> Time
                <input required type='time' id='gf-time' />
            </label>
            <label> Date
                <input required type='date' id='gf-date' min={formattedToday} />
            </label>
            <label>Title
                <input value={title} onChange={changeTitle} required type='input' id='gf-title' />
            </label>
            <label> Submit
                <input type='submit' onClick={handleSubmit} id='gf-submit' />
            </label>
        </form>
        </>
    );
}

export default GamesForm