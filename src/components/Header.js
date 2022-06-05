import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.head}>
          Necdet Burak Aslan
        </div>
        <div className={classes.title}>
          Front-end Developer/Analyst
        </div>
      </div>
    </>
  );
}

export default Header;
