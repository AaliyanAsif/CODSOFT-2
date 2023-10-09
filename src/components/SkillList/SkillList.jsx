import Skill from "../skill/Skill";

export default function SkillList() {
  return (
    <ul className="skill-list">
      <Skill
        skillName="React"
        skillImg="./public/1174949_js_react js_logo_react_react native_icon.png"
      />
      <Skill skillName="JavaScript" skillImg="./javascript.png" />
      <Skill skillName="CSS 3" skillImg="./css.png" />
      <Skill skillName="HTML 5" skillImg="./html.svg" />
    </ul>
  );
}
