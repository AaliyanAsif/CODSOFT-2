import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className="nav-links">
        <a className="hover" href="">
          Home
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
