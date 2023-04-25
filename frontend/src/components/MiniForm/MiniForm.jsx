import "./miniForm.css";
import { useState, useEffect } from "react";
import SubmitButton from "../Button/SubmitButton";
import { Modal } from "../../context/Modal";
import GameForm from "../GamesForm/GamesForm";
import LoginForm from "../SessionForms/LoginForm";
import { useSelector } from "react-redux";

function handleSubmit(e) {
  e.preventDefault();
}

const MiniForm = () => {
  const [sport, setSport] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const user = useSelector((state) => state?.session.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function openModal() {
    if (!isLoggedIn) {
      setLoginModal(true);
    } else {
      setShowModal(true);
    }
  }

  useEffect(() => {
    setIsLoggedIn(user !== undefined && user !== null);
  }, [user]);

  return (
    <>
      <form id="mf-master" onSubmit={handleSubmit}>
        <div>
          <div className="mf-title">Sport</div>
          <select
            id="drop"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            disabled={!isLoggedIn}
          >
            <option value="" disabled defaultValue>
              Select Sport
            </option>
            <option value="Badminton">Badminton</option>
            <option value="Basketball">Basketball</option>
            <option value="Baseball">Baseball</option>
            <option value="Cycling">Cycling</option>
            <option value="Darts">Darts</option>
            <option value="Fencing">Fencing</option>
            <option value="Football">Football</option>
            <option value="Golf">Golf</option>
            <option value="Handball">Hand Ball</option>
            <option value="Hockey">Hockey</option>
            <option value="Martial arts">Martial Arts</option>
            <option value="Soccer">Soccer</option>
            <option value="Softball">Softball</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Tennis">Tennis</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <div className="mf-title">Skill Level</div>
          <select
            id="drop"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            disabled={!isLoggedIn}
          >
            <option value="" disabled defaultValue>
              Select Skill Level
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div id="mf-button-container">
          {user ? (
            <SubmitButton clickFunction={openModal} textContext="Create Game" />
          ) : (
            <span id="mf-message">*Log in to create game*</span>
          )}
        </div>
      </form>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GameForm mfSport={sport} mfSkillLevel={skillLevel} />
        </Modal>
      )}

      {loginModal && (
        <Modal onClose={() => setLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default MiniForm;
