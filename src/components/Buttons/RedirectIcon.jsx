/* eslint-disable react/prop-types */
import "./RedirectIcon.css";
export default function RedirectIcon({ image, link }) {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <img className="small-icon" src={image} />
    </a>
  );
}
