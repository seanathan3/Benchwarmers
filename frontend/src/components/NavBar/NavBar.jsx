import './navBar.css';
import fullLogo from '../../assets/logo-full.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

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

            </div>
        </div>
    )
};

export default NavBar;