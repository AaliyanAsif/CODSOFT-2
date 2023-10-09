import RedirectIcon from "../Buttons/RedirectIcon";
import "./ContactIcons.css";

export default function ContactIcons() {
  return (
    <div className="contact-icons">
      <RedirectIcon
        link={"https://github.com/AaliyanAsif"}
        image={"/assests/github.png"}
      />
      <RedirectIcon
        link={"https://www.linkedin.com/in/aaliyan-asif-67b090271/"}
        image={"/assests/linkedin.png"}
      />
      <RedirectIcon
        link={"mailto:aaliyanasif@outlook.com"}
        image={"/assests/mail.png"}
      />
    </div>
  );
}
