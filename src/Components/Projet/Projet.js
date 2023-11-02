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
  var Nxt = () => {
    num++;
    if (num >= imgList.length) {
      num = 0;
    }
    let image = document.getElementById("slide");
    image.src = imgList[num];
  };

  var Prv = () => {
    num--;
    console.log(num);
    if (num < 0) {
      num = imgList.length - 1;
    }

    let image = document.getElementById("slide");
    image.src = imgList[num];
  };

  return (
    <div className="hi">
      <div id="principale">
        <div className="iconleft">
          <i
            onClick={() => {
              Prv();
            }}
            className="fa-solid fa-angle-left"
          ></i>
        </div>
        <div className="projet">
          <div className="card">
            <div className="div_image">
              <img id="slide" src={ayila} alt="img"></img>
            </div>
            <div className="div_contenu">
              <div className="col-md-8">
                <span className="titre">Application de mise en relation</span>
              </div>
              <div className="col-md-4">
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                  style={{ color: "gold" }}
                ></i>
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                  style={{ color: "gold" }}
                ></i>
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                  style={{ color: "gold" }}
                ></i>
              </div>
            </div>
            <div className="description">
                <div className="texte">
                  <span>
                    Ceci est une application semblable a booking qui permet de
                    faire des reservations en afrique faire des reservations en afrique
                    faire.
                  </span>
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
          <i
            onClick={() => {
              Nxt();
            }}
            className="fa-solid fa-angle-right"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Projet;
