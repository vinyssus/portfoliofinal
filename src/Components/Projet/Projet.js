import React from "react";
import "./Projet.css";
import ayila from "../../assets/image/ayila.jpg";
import compens from "../../assets/image/compens.jpg";
import fonakeukeu from "../../assets/image/fonakeukeu.jpg";

function Projet() {

  var imgList = [ayila,compens,fonakeukeu];
  var linkList = ["https://ayilaa.com/fr/","https://compensbank.com/fr/","https://adf.fonakeukeu.org/"];
  var descriptionList = ["Ayila'a est une application de reservation des bons coins au cameroun. Elle facilite l'intégration des étrangé.","Compens est une application qui repond a la fois au e-commerce et au transactions bancaire. Grace a elle les achats en ligne sont beaucoup plus simplifiés","Fonakeukeu est une application associative. Elle est utilisé pour le developpement d'un village et pour l'entraide entre les membres."];
  var num = 0;
  
  var changeImage = () => {
    let image = document.getElementById("slide")
    let description = document.getElementById("description")
    let link = document.getElementById("link")
    image.style.opacity = 0; // Commence le fondu sortant
  
    setTimeout(() => {
      description.innerHTML = descriptionList[num];
      link.href = linkList[num];
      image.src = imgList[num]; // Change l'image une fois le fondu sortant terminé
      image.style.opacity = 1; // Lance le fondu entrant
    }, 500); // 500ms correspond à la durée de l'animation de fondu
  };
  
  var Nxt = () => {
    num++;
    if (num >= imgList.length) {
      num = 0;
    }
    if (num >= linkList.length) {
      num = 0;
    }
    if (num >= descriptionList.length) {
      num = 0;
    }
    changeImage();
  };
  
  var Prv = () => {
    num--;
    if (num < 0) {
      num = imgList.length - 1;
    }
    if (num < 0) {
      num = linkList.length - 1;
    }
    if (num < 0) {
      num = descriptionList.length - 1;
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
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="description">
              <p id="description">
              Ayila'a est une application de reservation des bons coins au cameroun. Elle facilite l'intégration des étrangé.
              </p>
            </div>
            <div className="bouton">
              <a target="_blank" href="https://ayilaa.com/fr/" id="link">
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
