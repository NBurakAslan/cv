import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import classes from "./Skill.module.css";
function Skill(props) {
  const value = 0.66;

  return (
    <div
      className={classes.skillCard}
      style={{ width: 200, height: 200 }}
    >
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({
                pathTransition: "none",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
}

export default Skill;
