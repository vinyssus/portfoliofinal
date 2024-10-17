import React from "react";
import about from "../../assets/image/about.png";
import "./Acceuil.css";

function Acceuil() {
  return (
    <div className="principal">
      <div className="moi">
        <div className="titre">
          <h1>Je suis Viny Rodolphe</h1>
          <div className="defile">
            <span className="txt t1">- Consultant IT &nbsp;</span>
            <span className="txt t2">- Consultant IT &nbsp;</span>
          </div>
        </div>
        <div className="boutton">
          <a target="_blank" href="https://drive.google.com/file/d/1e7XX5jLLvuHOLpRs5NL336EUO3lLF0CO/view?usp=sharing">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Mon cv
          </a>
        </div>
      </div>
      <div className="image">
        <img src={about} alt="about" />
      </div>
    </div>
  );
}

export default Acceuil;
