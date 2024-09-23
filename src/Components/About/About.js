import React from "react";
import "./About.css";
import about from "../../assets/image/about.png";

function About() {

  

  return (
<div class="about-section">
    <div class="container">
        <h2 class="section-title">À Propos de Moi</h2>
        <div class="content">
            <div class="profile-pic">
                <img src={about} alt="Votre Photo"></img>
            </div>
            <div class="text">
                <h3 class="subtitle">Je suis Viny Rodolphe</h3>
                <p class="description">
                    Développeur backend passionné avec une expertise dans divers technologies. Je m'efforce de créer des solutions innovantes qui améliorent l'expérience utilisateur.
                </p>
                <div class="skills">
                    <h4>Compétences:</h4>
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
                        <h5>Frameworks et Outils:</h5>
                        <ul>
                            <li>Symfony</li>
                            <li>Spring Boot</li>
                            <li>React JS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div class="skills-group">
                        <h5>Base de Données:</h5>
                        <ul>
                            <li>MariaDB</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
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
                        <h5>Systèmes d'Exploitation:</h5>
                        <ul>
                            <li>Linux</li>
                            <li>Windows</li>
                            <li>macOS</li>
                        </ul>
                    </div>
                </div>
                <div class="languages">
                    <h4>Langues:</h4>
                    <ul>
                        <li>Français (Langue maternelle)</li>
                        <li>Anglais (Professionnel)</li>
                        <li>Arabe (Élémentaire)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default About;
