import Intro from "./Intro/Intro";
import "./Main.css";
import Skill from "./Skill/Skill";

export default function Main() {
  return (
    <div className="main-body">
      <div className="flex-item">
        <h1>Expertise</h1>
        <div className="container">
          <p className="typed">Front End Web Development</p>
        </div>
      </div>
      <Intro />
      <div className="flex-item">
        <h1>Skills</h1>
        <ul className="skill-list">
          <Skill
            skillName="React"
            skillImg="/assests/1174949_js_react js_logo_react_react native_icon.png"
          />
          <Skill skillName="JavaScript" skillImg="/assests/javascript.png" />
          <Skill skillName="CSS 3" skillImg="/assests/css.png" />
          <Skill skillName="HTML 5" skillImg="/assests/html.svg" />
        </ul>
      </div>
    </div>
  );
}
