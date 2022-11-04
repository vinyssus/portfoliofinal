import React from "react";
import "./About.scss";
import Typography from "@mui/material/Typography";


function About() {
  return (
    <div className="about">
      <div className="column">
      <div className="myaboutext">
        <Typography variant="h1" gutterBottom>
          Viny Rodolphe
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
      <div className="competence">
        <div>
          <Typography variant="h3" gutterBottom>
          Compétence
          </Typography>
        </div>
      </div>
      <div className="listecompetence">
     
      </div>
    </div>
    </div>
  );
}

export default About;
