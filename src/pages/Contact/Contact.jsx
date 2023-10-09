import ContactIcons from "../../components/Contact-icons/ContactIcons";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <h1>
        Contact Me <span>📞</span>{" "}
      </h1>

      <h3>
        Ready to make your move? The this section is your gateway to reaching
        out. Whether you're looking to work with me, kickstart a new project,
        seeking advice, or just want to chat strategy over a game of digital
        chess, I'm all ears. Drop me a message, and let's begin this exciting
        journey together! Your move.
      </h3>

      <h2>+92-3317610355 📱</h2>

      <a rel="noreferrer" target="_blank" href="mailto:aaliyanasif@outlook.com">
        <h2>aaliyanasif@outlook.com 📧</h2>
      </a>
      <ContactIcons />
    </div>
  );
}
