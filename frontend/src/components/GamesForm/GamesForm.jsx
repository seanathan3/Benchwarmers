import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './GamesForm.css';
import 'react-day-picker/dist/style.css';

const GamesForm = () => {
    const history = useHistory();

    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    const [selectedDay, setSelectedDay] = useState(today);

    const [sport, setSport] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState('');
    const [minCapacity, setMinCapacity] = useState(0);
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [title, setTitle] = useState('');

    let inputYesterday = `${year}-${month}-${day}`;
    let stringinputYesterday = inputYesterday.toString();

    console.log(inputYesterday);
    console.log(stringinputYesterday);
    let formattedYesterday = new Date(year, month, day - 1);
    const disabledDays = [{from: new Date(2020,1,1), to: formattedYesterday}]

    let user = useSelector((state) => (state.session?.user))
    let userId

    if(user){
        userId = user.id
    } else {
        userId = null
    }

    const host = userId




    const routeChange = () => {
        let path = `/user-profile/${userId}`
        history.push(path)
    }

    function handleSubmit(e){
        e.preventDefault();
        

        routeChange()
    }

    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <>
        <form>
            <label> Sport
                <select id='gf-sport'>
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
                <select id='gf-skill-level'>
                    <option value='beginner'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='advanced'>Advanced</option>
                </select>
            </label>
            <label> Description
                <input type='textarea' id='gf-description' />
            </label>
            <label> Min Capacity
                <input type='input' id='gf-min-capacity' />
            </label>
            <label> Max Capacity
                <input type='input' id='gf-max-capacity' />
            </label>
            <label> Time
                <input type='time' id='gf-time' />
            </label>
            <label> Date
                <input type='date' id='gf-date' min={inputYesterday} />
            </label>
            <label> Submit
                <input type='submit' id='gf-submit' />
            </label>

            {/* <div>Date
                <DayPicker
                mode="single"
                required
                selected={selectedDay}
                onSelect={setSelectedDay}
                footer={footer}
                disabled={disabledDays}
                />
                {userId === null ? <button disabled>Submit</button> : <button onClick={handleSubmit}>Submit</button>}
            </div> */}

        </form>
        </>
    );
}

export default GamesForm