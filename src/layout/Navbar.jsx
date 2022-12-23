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
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/nft">NFT</Link>
          </li>
          <li className="item">
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
