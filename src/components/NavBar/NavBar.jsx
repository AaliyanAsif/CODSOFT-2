import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>

      <div className="nav-links">
        <span className="hover">Home</span>
        <span className="hover">About</span>
        <span className="hover">Projects</span>
        <span className="hover">Contact</span>
      </div>
    </div>
  );
}
