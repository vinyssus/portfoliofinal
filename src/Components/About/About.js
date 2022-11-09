import React, { useState } from "react";
import "./About.css";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";

function About() {

  

  return (
    <div className="about">
      <div className="column">
        <div className="myaboutext">
          <Typography variant="h1" gutterBottom>
            Viny Rodolphe
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        <div className="competence">
            <Typography style={{padding:"1rem"}} variant="h3" gutterBottom>
              Compétence
            </Typography>
          <ol className="listcom">
            <li>
              {" "}
              <Switch id="checkinput" checked /><p>Language</p>
            </li>
            <li>
              {" "}
              <Switch /><p>Front End</p>
            </li>
            <li>
              {" "}
              <Switch /><p>Back End</p>
            </li>
            <li>
              {" "}
              <Switch /><p>Framework</p>
            </li>
            <li>
              {" "}
              <Switch /><p>Api</p>   
            </li>
            <li>
              {" "}
              <Switch /><p>Logiciel</p>
            </li>
          </ol>
        </div>
        <div className="listecompetence"></div>
      </div>
    </div>
  );
}

export default About;
