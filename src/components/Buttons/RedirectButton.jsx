/* eslint-disable react/prop-types */
import "./RedirectButton.css";
export default function RedirectButton({ link, text }) {
  return (
    <button className="redirect-btn">
      <a rel="noreferrer" target="_blank" href={link}>
        {text}
      </a>{" "}
    </button>
  );
}
