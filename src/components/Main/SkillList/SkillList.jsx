import Skill from "./Skill/Skill";

export default function SkillList() {
  return (
    <ul className="skill-list">
      <Skill
        skillName="React"
        skillImg="/assests/1174949_js_react js_logo_react_react native_icon.png"
      />
      <Skill skillName="JavaScript" skillImg="/assests/javascript.png" />
      <Skill skillName="CSS 3" skillImg="/assests/css.png" />
      <Skill skillName="HTML 5" skillImg="/assests/html.svg" />
    </ul>
  );
}
