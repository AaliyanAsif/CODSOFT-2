import RedirectButton from "../Buttons/RedirectButton";
import Intro from "./Intro/Intro";
import "./Main.css";
import SkillList from "./SkillList/SkillList";

export default function Main() {
  return (
    <div className="main-body">
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
        />
        {/* <button>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1fIG9HrqM1r_8_FVvAg4BQf5StY4hY5lr/view?usp=sharing"
          >
            View Resume
          </a>{" "}
        </button> */}
      </div>
      <Intro />
      <div className="flex-item">
        <h1>Skills</h1>
        <SkillList />
      </div>
    </div>
  );
}
