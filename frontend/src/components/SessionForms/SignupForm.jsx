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
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {/* <div>{errors?.email}</div> */}
                <label>Email
                    <input 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                {/* <div>{errors?.username}</div> */}
                <label>Username
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {/* <div>{errors?.password}</div> */}
                <label>Password
                    <input 
                        input='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input 
                    type="submit"
                    value='Sign Up'
                />
            </form>
        </>
    )
}

export default SignupForm;