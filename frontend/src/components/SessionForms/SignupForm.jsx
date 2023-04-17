import './sessionForm.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signup, removeSessionErrors } from '../../store/session'


const SignupForm = () => {
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const errors = useSelecotr(state => state.errors.session)
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(removeSessionErrors());
        };
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            username,
            password
        };
        dispatch(signup(user));
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="sf-signupForm" className="sf-authForm">
                <h1>Welcome to Benchwarmers</h1>
                <h2>Sign Up</h2>
                {/* <div>{errors?.email}</div> */}
                <div className='sf-email-container'>
                    <label>Email</label><br></br>
                        <input 
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                {/* <div>{errors?.username}</div> */}
                <div className='sf-username-container'>
                    <label>Username</label><br></br>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
                {/* <div>{errors?.password}</div> */}
                <div className='sf-password-container'>
                    <label>Password</label><br></br>
                        <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className='sf-auth-button'>
                    <input 
                        type="submit"
                        value='Sign Up'
                    />
                </div>
            </form>
        </>
    )
}

export default SignupForm;