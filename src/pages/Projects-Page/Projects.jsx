/* eslint-disable react/no-unescaped-entities */
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <h4>
        Explore a selection of my diverse and innovative projects showcasing my
        expertise in web development.{" "}
      </h4>
      <div className="projects-flex">
        <ProjectContainer
          img={"/assests/packpal.png"}
          title={"PackPal"}
          siteLink={"https://aaliyanasif.github.io/PackPal/"}
          github={"https://github.com/AaliyanAsif/PackPal"}
        >
          PackPal is a user-friendly and efficient website designed to simplify
          your vacation packing experience. This packing tool combines
          functionality and ease of use to ensure you never forget an essential
          item again.
        </ProjectContainer>
        <ProjectContainer
          img={"/assests/images/agecal.jpg"}
          title={"Age Calculator"}
          siteLink={"https://aaliyanasif.github.io/age-calculator/"}
          github={"https://github.com/AaliyanAsif/age-calculator"}
        >
          Discover exactly how long you've been on this journey we call life!
          Our Age Calculator takes your birthdate and computes your age in
          precise years, months, and days. Whether you're planning a milestone
          celebration or simply curious about the passage of time, our tool
          provides the answers you seek. Unlock the fascinating details of your
          age effortlessly!
        </ProjectContainer>
        <ProjectContainer
          img={"/assests/images/fylo.png"}
          title={"Fylo Landing Page"}
          siteLink={"https://aaliyanasif.github.io/Fylo-Landing-Page/"}
          github={"https://github.com/AaliyanAsif/Fylo-Landing-Page"}
        >
          Welcome to Fylo, your gateway to seamless collaboration and
          productivity. At Fylo, we empower teams and individuals to work
          smarter, not harder. Our suite of tools simplifies communication,
          streamlines workflow, and fuels innovation. Join us on a journey to
          transform the way you work, and experience a future where productivity
          knows no bounds
        </ProjectContainer>
        <ProjectContainer
          img={"/assests/images/simongame.png"}
          title={"Simon Game"}
          siteLink={"https://aaliyanasif.github.io/SimonGame/"}
          github={"https://github.com/AaliyanAsif/SimonGame"}
        >
          Challenge your memory and reflexes with the classic Simon game. Put
          your pattern recognition skills to the test as you follow the
          sequences of lights and sounds. Can you keep up and beat your high
          score? Enjoy hours of fun and excitement with this addictive
          JavaScript-powered Simon game!
        </ProjectContainer>

        <ProjectContainer
          img={"/assests/images/eatnsplit.png"}
          title={"Eat-N-Split"}
          siteLink={"https://aaliyanasif.github.io/eat-n-split/"}
          github={"https://github.com/AaliyanAsif/eat-n-split"}
        >
          Eat-N-Split, a user-friendly front-end web application built with
          React and styled using CSS flexbox and grid for a clean and intuitive
          layout. Eat-N-Split simplifies the process of splitting bills with
          friends, making financial management a breeze.
        </ProjectContainer>
        <ProjectContainer
          img={"/assests/images/clipboard.png"}
          title={"ClipBoard Landing Page"}
          siteLink={"https://aaliyanasif.github.io/Clipboard-Landing-Page/"}
          github={"https://github.com/AaliyanAsif/Clipboard-Landing-Page"}
        >
          "Unlock the Full History of Your Copies with Clipboard. Discover a new
          way to track and organize everything you copy. With Clipboard, your
          clipboard history is at your fingertips, accessible instantly across
          all your devices. Effortlessly manage your copied content and never
          lose track of important information again
        </ProjectContainer>
      </div>
    </div>
  );
}
