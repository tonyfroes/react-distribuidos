import { Link } from "react-router-dom";

import Container from "./Container";

import "./Navbar.css";
import logo from "../img/scam.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img className="logo" src={logo} alt="Costs"></img>
        </Link>
        <ul className="list">
          {[{ name: 'Crypto Coins', link: '/' }, { name: 'NFT', link: '/nft' }, { name: 'Sobre', link: '/sobre' }].map((item, index) =>
          (
            <li key={index} className="item">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}

        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
