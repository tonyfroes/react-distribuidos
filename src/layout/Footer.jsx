import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <a href="https://github.com/tonyfroes">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tonydanilofroes/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Kog4mii">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <p className="texto">
        <p>Trabalho de Sistemas Distribuídos</p>
      </p>
    </footer>
  );
}

export default Footer;
