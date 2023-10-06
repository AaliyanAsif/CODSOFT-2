import Intro from "./Intro/Intro";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-body">
      <div className="flex-item">
        <h2>Expertise</h2>
        <div className="container">
          <p className="typed">Front End Web Development</p>
        </div>
      </div>
      <Intro />
      <div className="flex-item">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>
            React{" "}
            <img src="/assests/1174949_js_react js_logo_react_react native_icon.png " />
          </li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
        </ul>
      </div>
    </div>
  );
}
