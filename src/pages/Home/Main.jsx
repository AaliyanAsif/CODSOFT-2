import RedirectButton from "../../components/Buttons/RedirectButton";
import Intro from "../../components/Intro/Intro";
import "./Main.css";
import SkillList from "../../components/SkillList/SkillList";
import { Element } from "react-scroll";
import ContactIcons from "../../components/Contact-icons/ContactIcons";

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
          <ContactIcons />
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
