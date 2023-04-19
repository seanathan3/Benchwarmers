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

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch, userId])

    function handleLogout(e) {
        dispatch(logout());
    }

    let loggedOutButtons
    if(!userId){
        loggedOutButtons = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        )
    }

    let loggedInButtons;
    if(userId){
        loggedInButtons = (
            <>
                <div>Create Game</div>
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
                <Link to="/games">
                    <div>Join Game</div>
                </Link>
                {loggedOutButtons}
                {loggedInButtons}
            </div>
        </div>
    )
};

export default NavBar;