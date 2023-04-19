import './sessionForm.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, removeSessionErrors } from '../../store/session';
import * as sessionActions from '../../store/session'
import SubmitButton from '../Button/SubmitButton';
import '../Button/SubmitButton.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();
    const errors = useSelector(state => state?.sessionErrors)

    useEffect(() => {
        return () => {
            dispatch(removeSessionErrors());
        };
    }, [dispatch]);

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(
            sessionActions.login({ email: "ababar@gmail.com", password: "password" })
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="sf-loginForm" className='sf-authForm'>
                <h1>Welcome to Benchwarmers</h1>
                <h2 className='modal-title'>Login</h2>
                <div>{errors?.email}</div>
                <div id='sf-lg-email-container'>
                        <input 
                        className='sf-lg-email-container'
                        placeholder='Email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <br />
                <div>{errors?.password}</div>
               <div id='sf-lg-password-container' >
                        <input 
                        className='sf-lg-password-container'
                        placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
               </div>
               <br />
               <br />

                    <SubmitButton clickFunction={handleSubmit} textContext='Login' />
                    <br />
                    <SubmitButton clickFunction={demoLogin} textContext='Demo User' />
            </form>
        </>
    )
}

export default LoginForm;