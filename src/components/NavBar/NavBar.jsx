import "./NavBar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>

      <div className="nav-links">
        <Link className="hover" to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link className="hover" to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link className="hover" to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link className="hover" to="contact" smooth={true} duration={500}>
          Contact Me
        </Link>
      </div>
    </div>
  );
}
