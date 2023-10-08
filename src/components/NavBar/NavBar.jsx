import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>

      <div className="nav-links">
        <a className="hover" href="">
          Home
        </a>
        <a className="hover" href="">
          About
        </a>
        <a className="hover" href="">
          Projects
        </a>
        <a className="hover" href="">
          Contact
        </a>
      </div>
    </div>
  );
}
