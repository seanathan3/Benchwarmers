import './sessionForm.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, removeSessionErrors } from '../../store/session';
import SubmitButton from '../Button/SubmitButton';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(removeSessionErrors());
        };
    }, [dispatch]);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="sf-loginForm" className='sf-authForm'>
                <h1>Welcome to Benchwarmers</h1>
                <h2 className='modal-title'>Login</h2>
                {/* <div>{errors?.email}</div> */}
                <div id='sf-lg-email-container' className='sf-email-container'>
                    <label>Email</label><br></br>
                        <input 
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                {/* <div>{errors?.password}</div> */}
               <div id='sf-lg-password-container' className='sf-password-container'>
                    <label>Password</label><br></br>
                        <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
               </div>
               <div className='sf-auth-button'>
                    {/* <input 
                        type='submit'
                        value='Login'
                    /> */}
                    <SubmitButton clickFunction={handleSubmit} textContext='Login' />
               </div>
            </form>
        </>
    )
}

export default LoginForm;