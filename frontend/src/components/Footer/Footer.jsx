import { Link } from "react-router-dom";
import fullLogo from "../../assets/logo-full.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer-logo">
          <Link to="/">
            <img id="footer-logoPic" src={fullLogo} alt="full-logo" />
          </Link>
        </div>
        <div id='footer-middle'>
          Benchwarmers was developed in 4 days using the MERN stack
        </div>
        <div id='footer-end'>New York, NY</div>
      </div>
    </>
  );
};

export default Footer;
