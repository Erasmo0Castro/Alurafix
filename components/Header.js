import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>AluraFlix</h1>
        <p>Challenge React</p>
        <nav className="nav-desktop">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Inicio
          </Link>
          <Link to="/add-video">
            <FontAwesomeIcon icon={faPlus} /> Nuevo video
          </Link>
        </nav>
      </div>
      <nav className="nav-mobile">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/add-video">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
