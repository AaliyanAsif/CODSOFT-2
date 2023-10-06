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
      </div>
      <Intro />
      <div className="flex-item">
        <h1>Skills</h1>
        <SkillList />
      </div>
    </div>
  );
}
