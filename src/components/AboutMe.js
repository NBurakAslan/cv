import React from "react";
import classes from "./AboutMe.module.css";
import profiloimg1 from "./../img/profiloimg1.jpg";
import pro2 from "./../img/pro2.jpeg";
import lacin from "./../img/lacin.jpg";
function AboutMe(props) {
  return (
    <div className={classes.parag}>
      <div className={classes.h2Class}>ABOUT ME</div>
      <p>
        Front-end developer who loves to keep track of and learn new
        technologies. My newborn daughter adds more motivation for me to keep me
        on track for working hard :). With a good educational background in
        Turkey and twelve years expreience in this industry, I've honed my
        analytical thinking and collaboration skills, and love working with a
        team. Last 5 years I started focusing on front-end development with my
        best friend's guidance, who is an accomplished full-stack developer in
        England.
      </p>
      <div className={classes.cardfan}>
        <img alt="My Daughter" src={lacin} />
        <img alt="My Daughter2" src={profiloimg1} />
        <img alt="My Daughter2" src={pro2} />
      </div>
    </div>
  );
}

export default AboutMe;
