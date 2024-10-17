import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container"> 
            <ul>
              <li className="icon"><a target="_blank" href="https://www.facebook.com/vinyssus.rodolphe.7"><i className="fab fa-facebook"></i></a></li>
              <li className="icon"><a target="_blank" href="https://www.linkedin.com/in/vinyssus-rodolphe-34b4781b4/"><i className="fab fa-linkedin"></i></a></li>
              <li className="icon"><a target="_blank" href="https://api.whatsapp.com/send?phone=21699501379"><i className="fab fa-whatsapp"></i></a></li>
              <li className="icon"><a target="_blank" href="https://twitter.com/Vinyssus237"><i className="fab fa-twitter"></i></a></li>
              <li className="icon"><a target="_blank" href="https://github.com/vinyssus"><i className="fab fa-github"></i></a></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
