import React from "react";
import "./Projet.css";
import ayila from "../../assets/image/ayila.jpg";
import compens from "../../assets/image/compens.jpg";
import fonakeukeu from "../../assets/image/fonakeukeu.jpg";
import miservices from "../../assets/image/miservices2.png";
import ayilaweb from "../../assets/image/ayilaweb.png";

function Projet() {
  var imgList = [ayila, compens, fonakeukeu, miservices, ayilaweb];
  var num = 0;
  
  var changeImage = () => {
    let image = document.getElementById("slide");
    image.style.opacity = 0; // Commence le fondu sortant
  
    setTimeout(() => {
      image.src = imgList[num]; // Change l'image une fois le fondu sortant terminé
      image.style.opacity = 1; // Lance le fondu entrant
    }, 500); // 500ms correspond à la durée de l'animation de fondu
  };
  
  var Nxt = () => {
    num++;
    if (num >= imgList.length) {
      num = 0;
    }
    changeImage();
  };
  
  var Prv = () => {
    num--;
    if (num < 0) {
      num = imgList.length - 1;
    }
    changeImage();
  };  

  return (
    <div className="hi">
    <div id="principale">
      <div className="iconleft">
        <i onClick={Prv} className="fa-solid fa-angle-left"></i>
      </div>
      <div className="projet">
        <div className="card">
          <div className="div_image">
            <img id="slide" src={ayila} alt="img" />
          </div>
          <div className="div_contenu">
            <span className="titre">Application de mise en relation</span>
            <div className="stars">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="description">
              <p>
                Ceci est une application semblable à Booking qui permet de faire
                des réservations en Afrique.
              </p>
            </div>
            <div className="bouton">
              <a href="#">
                <button>Visitez</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="iconright">
        <i onClick={Nxt} className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  
  );
}

export default Projet;
