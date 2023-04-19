import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './GamesForm.css';
import { fetchGame } from '../../store/games';


const GamesForm = (prop) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const today = new Date();
    let year = today.getFullYear();

    const [header, setHeader] = useState('Create a Game')
    const [sport, setSport] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [minCapacity, setMinCapacity] = useState(0);
    const [time, setTime] = useState('')
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [title, setTitle] = useState('');


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
    // let gameId = prop.game._id
    let userId

    if(user){
        userId = user.id
    } else {
        userId = null
    }
    
    // useEffect(() => {
    //     if(gameId) {
    //         dispatchEvent(fetchGame(gameId))
    //         setHeader('Edit Your Game')
    //         setSport(props.game.sport)
    //         setDescription(props.game.description)
    //         setMaxCapacity(props.game.maxCapacity)
    //         setMinCapacity(props.game.minCapacity)
    //         setSkillLevel(props.game.skillLevel)
    //         setTitle(props.game.title)
    //     }
    // }, [disptch, gameId])


    const routeChange = () => {
        let path = `/user-profile/${userId}`
        history.push(path)
    }

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
        const newGame = {
            sport,
            description,
            maxCapacity,
            minCapacity,
            skillLevel,
            title
        }

        newGame.host = userId
        
        // if(gameId){
        //     newGame._id = gameId
        //     dispatch(updateGame(newGame))
        // } else{
        //     dispatch(createGame(newGame))
        // }
        // routeChange()
    }


    return (
        <>
        <form>
            <h1>{header}</h1>
            <label> Sport
                <select value={sport} onChange={changeSport} id='gf-sport'>
                    <option value='badminton'>Badminton</option>
                    <option value='baseball'>Baseball</option>
                    <option value='basketball'>Basketbal</option>
                    <option value='cycling'>Cycling</option>
                    <option value='darts'>Darts</option>
                    <option value='fencing'>Fencing</option>
                    <option value='football'>Football</option>
                    <option value='golf'>Golf</option>
                    <option value='hand-ball'>Hand Ball</option>
                    <option value='hockey'>Hockey</option>
                    <option value='martial-arts'>Martial Arts</option>
                    <option value='soccer'>Soccer</option>
                    <option value='softball'>Softball</option>
                    <option value='table-tennis'>Table Tennis</option>
                    <option value='tennis'>Tennis</option>
                    <option value='volleyball'>Volleyball</option>
                    <option value='other'>Other</option>
                </select>
            </label>
            <label> Skill Level
                <select value={skillLevel} onChange={changeSkillLevel} id='gf-skill-level'>
                    <option value='beginner'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='advanced'>Advanced</option>
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
                <input type='submit' id='gf-submit' />
            </label>
        </form>
        </>
    );
}

export default GamesForm