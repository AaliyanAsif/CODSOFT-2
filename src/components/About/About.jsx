/* eslint-disable react/no-unescaped-entities */
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img className="about-img" src="/assests/pro.png" />
      <div className="about-text">
        <h1>
          Who am I <span>?</span>
        </h1>

        <div className="about-me">
          <p>
            I'm Spiderman , ok no i'm not but, I am a{" "}
            <span className="colorfull">software sorcerer </span> 🧙‍♂️ with a
            degree in Software Engineering. My specialty? Crafting captivating
            web experiences!{" "}
          </p>
          <p>
            As a Front-end Magician I wield the powers of React HTML, CSS, and
            JavaScript to create web magic.
          </p>
          <p>
            When I'm not coding, I'm outwitting opponents on the chessboard{" "}
            <span className="large-icon">♞</span> . It's my secret strategy to
            unwind and keep my mind sharp. Welcome to my digital playground.
            Let's conjure up some tech magic together! 💻🪄
          </p>
        </div>
      </div>
    </div>
  );
}
