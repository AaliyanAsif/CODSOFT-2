import Skill from "../skill/Skill";

export default function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skillName="React" skillImg="./react.png" />
      <Skill skillName="JavaScript" skillImg="./javascript.png" />
      <Skill skillName="CSS 3" skillImg="./css.png" />
      <Skill skillName="HTML 5" skillImg="./html.svg" />
    </ul>
  );
}
