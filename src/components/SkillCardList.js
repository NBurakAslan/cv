import React from "react";
import classes from "./SkillCardList.module.css";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import lacin from "./../img/lacin.jpg";
const bounceAnimation = keyframes`${fadeInUp}`;

const BouncyImg = styled.img`
  position: absolute;
  width: 240px;
  height: 320px;
  border-radius: 7px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
  animation: 1s ${bounceAnimation};
`;

function SkillCardList(props) {
  return (
    <div className={classes.skillCardList}>
      <h2>SKILLS</h2>
      <div className={classes.mainSkills}>
        <div style={{ "--order": 1.5 }}>HTML</div>
        <div style={{ "--order": 3 }}>CSS</div>
        <div style={{ "--order": 4.5 }}>JAVASCRIPT</div>
        <div style={{ "--order": 6 }}>REACT.JS</div>
        <div style={{ "--order": 7.5 }}>NODE.JS</div>
        <div style={{ "--order": 9 }}>TSQL</div>
        <div style={{ "--order": 10.5 }}>EXCEL</div>
        <div style={{ "--order": 12 }}>SAP IS-U</div>
      </div>
      <div className={classes.minorSkills}>
        <p>.net</p>
        <p>visual-basic</p>
        <p>postman</p>
        <p>ms-project</p>
        <p>abap</p>
        <p>c#</p>
        <p>mongo-db</p>
        <p>firebase</p>
        <p>redux</p>
        <p>git</p>
      </div>
      <div className={classes.imganimation}>
        <BouncyImg src={lacin}></BouncyImg>
      </div>
    </div>
  );
}

export default SkillCardList;
