import './navBar.css';
import fullLogo from '../../assets/logo-full.png';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch();

    function handleLogout(e) {
        dispatch(logout());
    }

    return(
        <div id="nb-master">
            <div id="nb-logo">
                <Link to="/">
                    <img id="nb-logoPic" src={fullLogo} alt="full-logo" />
                </Link>
            </div>

            <div id="nb-rightLinks">
                <div>Log In</div>
                <div>Sign Up</div>
                <div onClick={handleLogout}>Log Out</div>

            </div>
        </div>
    )
};

export default NavBar;