import React from "react";
import "./Projet.css";
import reactimg from "../../assets/image/react.png";
import swingimg from "../../assets/image/swing.jpg";
import symfonyimg from "../../assets/image/symfony.png";
import springtimg from "../../assets/image/spring.jpg";

function Projet() {
  var imgList = [reactimg, swingimg, symfonyimg, springtimg];

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
            <img id="slide" src={reactimg} alt="img"></img>
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
