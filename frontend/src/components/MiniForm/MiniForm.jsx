import './miniForm.css';
import { useState } from 'react';
import SubmitButton from '../Button/SubmitButton';

function handleSubmit(e) {
    e.preventDefault();
}

const MiniForm = () => {
    const [sport, setSport] = useState();
    const [skillLevel, setSkillLevel] = useState();

    function openModal() {
        
    }

    return(
        <form  id="mf-master" onSubmit={handleSubmit}>
            <div> 
                <div className="mf-title">
                    Sport
                </div>
                <select value={sport} onChange={e => setSport(e.target.value)} >
                    <option value='Badminton'>Badminton</option>
                    <option value='Baseball'>Baseball</option>
                    <option value='Basketball'>Basketball</option>
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
            </div>
            <div>
                <div className="mf-title">
                    Skill Level
                </div>
                <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Advanced'>Advanced</option>
                </select>
            </div>
            <SubmitButton clickfunctiion={openModal} textContext="Create Game" />
        </form>
    )
};

export default MiniForm;