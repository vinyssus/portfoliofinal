import React from "react";
import "./About.css";
import profile1 from "../../assets/image/profile2.jpg";

function About() {
  return (
    <div class="about-section">
      <div class="container">
        <div class="left-row">
          <h2 class="section-title" style={{marginTop:"5px"}}>À Propos de Moi</h2>
          <div class="profile-pic">
            <img src={profile1} alt="Votre Photo"></img>
            <div class="about-me">
            <h3 class="subtitle">Je suis Viny Rodolphe Naoussi</h3>
            <p class="description">
            En tant que développeur full stack passionné par les nouvelles technologies, j'apporte une expertise approfondie dans la création de solutions innovantes et performantes.
            </p>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="text">
            <div class="skills">
              <h4>Compétences:</h4>
              <div class="skills-group">
                <h5>Outils et Technologies:</h5>
                <ul>
                  <li>Firebase</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Jenkins</li>
                  <li>Postman</li>
                </ul>
              </div>
              <div class="skills-group">
                <h5>Frameworks et Outils:</h5>
                <ul>
                  <li>Symfony</li>
                  <li>Spring Boot</li>
                  <li>React JS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div class="skills-group">
                <h5>Langages de Programmation:</h5>
                <ul>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>
              <div class="skills-group">
                <h5>Systèmes d'Exploitation:</h5>
                <ul>
                  <li>Linux</li>
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Admin sys</li>
                </ul>
              </div>
              <div class="skills-group">
                <h5>Autres</h5>
                <ul>
                  <li>MariaDB</li>
                  <li>PostgreSQL</li>
                  <li>Mysql</li>
                  <li>Reseau Ip</li>
                </ul>
              </div>
              <div class="skills-group">
                <h5>Langues:</h5>
                <ul>
                  <li>Anglais</li>
                  <li>Francais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
