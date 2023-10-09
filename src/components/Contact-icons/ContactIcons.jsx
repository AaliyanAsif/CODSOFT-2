import RedirectIcon from "../Buttons/RedirectIcon";
import "./ContactIcons.css";

export default function ContactIcons() {
  return (
    <div className="contact-icons">
      <RedirectIcon
        link={"https://github.com/AaliyanAsif"}
        image={"./github.png"}
      />
      <RedirectIcon
        link={"https://www.linkedin.com/in/aaliyan-asif-67b090271/"}
        image={"./linkedin.png"}
      />
      <RedirectIcon
        link={"mailto:aaliyanasif@outlook.com"}
        image={"./mail.png"}
      />
    </div>
  );
}
