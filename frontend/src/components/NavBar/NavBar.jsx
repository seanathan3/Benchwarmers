import './navBar.css';
import fullLogo from '../../assets/logo-full.png';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import SignupFormModal from '../SessionForms/SignupFormModal';
import LoginFormModal from '../SessionForms/LoginFormModal';
import { useEffect } from 'react';
import { getCurrentUser } from '../../store/session';

const NavBar = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session?.user?._id)
    console.log(userId)

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch, userId])

    function handleLogout(e) {
        dispatch(logout());
    }

    let loggedInButtons
    if(!userId){
        loggedInButtons = (
            <>
                <div><LoginFormModal /></div>
                <div><SignupFormModal /></div>
            </>
        )
    }

    let loggedOutButtons;
    if(userId){
        loggedOutButtons = (
            <>
                <div onClick={handleLogout}>Log Out</div>
            </>
        )
    }

    return(
        <div id="nb-master">
            <div id="nb-logo">
                <Link to="/">
                    <img id="nb-logoPic" src={fullLogo} alt="full-logo" />
                </Link>
            </div>

            <div id="nb-rightLinks">
                {loggedOutButtons}
                {loggedInButtons}
            </div>
        </div>
    )
};

export default NavBar;