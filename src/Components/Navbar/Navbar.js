import "./Navbar.css";
import menu from "../../assets/image/icons8-menu.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleActive = (path) => {
    setActiveLink(path)
  }

  return (
    <div className="nav">
      <div className="left">
        <a className="call1" style={{ color: "white" }} href="tel:+21699501379">
          <i className="fa-solid fa-phone"></i>
        </a>
        <p className="call2">
          <i className="fa-solid fa-phone"></i> +237 658060432
        </p>
      </div>

      <div className={!menuOpen ? "vertical" : "column"}>
        <ul>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
               handleActive('/');
              }}
              to="/"
              class={activeLink === '/' ? 'active-link' : 'nav-link'}
            >
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
                handleActive('/About');
              }}
              to="/About"
              class={activeLink === '/About' ? 'active-link' : 'nav-link'}
            >
              A propos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
                handleActive('/Projet');
              }}
              to="/Projet"
              class={activeLink === '/Projet' ? 'active-link' : 'nav-link'}
            >
              Projets
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
                handleActive('/Contact');
              }}
              to="/Contact"
              class={activeLink === '/Contact' ? 'active-link' : 'nav-link'}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="openMenu">
        <img
          onClick={() => {
            setMenuOpen(!menuOpen);
            //     console.log("classe clik");
            //  var listenav =  document.getElementsByClassName(".liste");
            //  listenav.classList.toggle("active");
          }}
          src={menu}
          alt="this is the menu"
        />
      </div>
    </div>
  );
}

export default Navbar;
