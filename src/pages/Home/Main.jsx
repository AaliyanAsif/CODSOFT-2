import RedirectButton from "../../components/Buttons/RedirectButton";
import RedirectIcon from "../../components/Buttons/RedirectIcon";
import Intro from "../../components/Intro/Intro";
import "./Main.css";
import SkillList from "../../components/SkillList/SkillList";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <Element name="home">
      <div id="home" className="main-body">
        <div className="flex-item">
          <h1>My Expertise</h1>
          <div className="container">
            <p className="typed">Front End Web Development</p>
          </div>
          <br></br>
          <RedirectButton
            link={
              "https://drive.google.com/file/d/1fIG9HrqM1r_8_FVvAg4BQf5StY4hY5lr/view?usp=sharing"
            }
            text={"View Resume"}
          />
          <br />
          <div className="contact-icons">
            <RedirectIcon
              link={"https://github.com/AaliyanAsif"}
              image={"/assests/github.png"}
            />
            <RedirectIcon
              link={"https://www.linkedin.com/in/aaliyan-asif-67b090271/"}
              image={"/assests/linkedin.png"}
            />
            <RedirectIcon
              link={"mailto:aaliyanasif@outlook.com"}
              image={"/assests/mail.png"}
            />
          </div>
        </div>
        <Intro />
        <div className="flex-item">
          <h1>Skills</h1>
          <SkillList />
        </div>
      </div>
    </Element>
  );
}
