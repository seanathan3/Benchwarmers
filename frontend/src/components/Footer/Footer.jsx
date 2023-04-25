import { Link } from "react-router-dom";
import LoginFormModal from "../SessionForms/LoginFormModal";
import SignupFormModal from "../SessionForms/SignupFormModal";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div id='footer'>
      <Link id='footer-links'  to="/about">
        <div>About</div>
      </Link>
      <div>New York, NY</div>
      <LoginFormModal />
      <SignupFormModal />
      </div>
    </>
  );
};

export default Footer;
