/* eslint-disable react/prop-types */
import "./RedirectButton.css";
export default function RedirectButton({ link }) {
  return (
    <button className="redirect-btn">
      <a rel="noreferrer" target="_blank" href={link}>
        View Resume
      </a>{" "}
    </button>
  );
}
