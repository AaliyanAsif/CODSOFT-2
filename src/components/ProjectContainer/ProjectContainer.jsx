/* eslint-disable react/prop-types */
import "./ProjectContainer.css";

export default function ProjectContainer({
  img,
  title,
  siteLink,
  github,
  children,
}) {
  return (
    <div className="project-container">
      <div className="container">
        <img src={img} />
        <div className="btn">
          <a href={siteLink} target="_blank" rel="noreferrer">
            <button>Live Site</button>{" "}
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <button>GitHub Repositry</button>
          </a>
        </div>
      </div>
      <div className="project-text">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
