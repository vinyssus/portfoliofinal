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
            <span className="txt t1">- software engineer student&nbsp;</span>
            <span className="txt t2">- software engineer student&nbsp;</span>
          </div>
        </div>
        <div className="boutton">
          <a href="https://drive.google.com/file/d/1At4FTYQli3E4mno5gwnEY_sngHgRp6GF/view?usp=share_link">
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
