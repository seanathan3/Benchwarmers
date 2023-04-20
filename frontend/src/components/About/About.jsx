import "./About.css";
import Sean from "../../assets/Sean.jpeg";
import Sabrina from "../../assets/Sabrina.jpeg";
import Charles from "../../assets/Carlos.jpeg";
import Ariel from "../../assets/Ariel.jpeg";
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"

const About = () => {
  return (
    <>
      <div id="about-container">
        <div id="description-container">
          <label id="ab">About Benchwarmers</label>
          <br />
          <div id="about">
            <div id="description">
              <p>
                Benchwarmers is an application designed for people who want to
                play pickup sports in groups but don't have know people to play
                with. Users can create and join 'games' on the application to
                play their favorite sports and make new friends in the process.
                Benchwarmers aims to be a simplistic and modern website that
                allows users to easily access any game and its information in
                just a couple of clicks.
              </p>
              <br />
              <p>
                Upon logging in, users have access to games. Users can create
                games, fill in game details (date, location, sport, etc...), and
                interact with existing games. A Google Maps API will be used to
                display the location of games, which users can select to view
                details and join the game.
              </p>
              <br />
              <p>
                Benchwarmers was built using a MERN stack, a combination of four
                technologies: MongoDB, ExpressJS, ReactJS, and NodeJS.
              </p>
              <br />
              <p>
                For more information, please check out our project repo on{" "}
                <a
                  href="https://github.com/sean-a99/Benchwarmers"
                  target="_blank"
                >
                  Github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <br />
        <div id="team-container">
          <label id="ab">Meet the Team behind Benchwarmers</label>
          <br />
          <br />
          <div id="team">
            <div id="Sean">
              <h3 id="name-title">Sean Abbas</h3>
              <h3 id="name-title">Project Lead</h3>
              <br />
              <img id="team-photo" src={Sean} alt="sean" />
              <br />
              <div id="icons">
              <a href="https://www.linkedin.com/in/sean-abbas/" target="_blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={gmail} alt="gmail" />
              </a>
              </div>
            </div>
            <div id="Ariel">
              <h3 id="name-title">Ariel Baez</h3>
              <h3 id="name-title">Backend Lead</h3>
              <br />
              <img id="team-photo" src={Ariel} alt="ariel" />
              <br />
              <div id="icons">
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="mailto:abez8031.com" target="_blank">
                <img src={gmail} alt="gmail" />
              </a>
              </div>
            </div>
            <div id="Sabrina">
              <h3 id="name-title">Sabrina Desmond</h3>
              <h3 id="name-title">Frontend Lead</h3>
              <br />
              <img id="team-photo" src={Sabrina} alt="sabrina" />
              <br />
              <div id="icons">
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="mailto:sabrinawdesmond.com" target="_blank">
                <img src={gmail} alt="gmail" />
              </a>
              </div>
            </div>
            <div id="Charles">
              <h3 id="name-title">Charles Cruse</h3>
              <h3 id="name-title">Flex Lead</h3>
              <br />
              <img id="team-photo" src={Charles} alt="charles" />
              <br />
              <div id="icons">
              <a href="https://www.linkedin.com/in/charles-cruse-2ba72ab6/" target="_blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:sean.abbas33@gmail.com" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="mailto:charle9@vt.edu" target="_blank">
                <img src={gmail} alt="gmail" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
