/* eslint-disable react/prop-types */
import "./Skill.css";

export default function Skill({ skillName, skillImg }) {
  return (
    <li>
      <p>{skillName}</p>

      <img src={skillImg} />
    </li>
  );
}
