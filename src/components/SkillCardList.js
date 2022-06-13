import React from "react";
import classes from "./SkillCardList.module.css";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import is1 from "./../img/is1.jpeg";
import is2 from "./../img/is2.jpeg";
import is3 from "./../img/is3.jpeg";
import SkillImgCard from "./SkillImgCard";

const bounceAnimation = keyframes`${fadeInUp}`;

const NewImg1 = styled(SkillImgCard)`
  grid-column: 2;
  grid-row: 1;
  animation: 1s ${bounceAnimation};
`;

const NewImg2 = styled(SkillImgCard)`
  grid-column: 1;
  grid-row: 2;

  animation: 1s ${bounceAnimation};
`;
const NewImg3 = styled(SkillImgCard)`
  grid-column: 2;
  grid-row: 3;
  animation: 1s ${bounceAnimation};
`;

const data = [
  {
    paragh:
      "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    title: "Lorem ipsum.",
    aciklama: "More lorem ipsum bacon ipsum.",
    src: is1,
  },
  {
    paragh:
      "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    title: "Lorem ipsum.",
    aciklama: "More lorem ipsum bacon ipsum.",
    src: is2,
  },
  {
    paragh:
      "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    title: "Lorem ipsum.",
    aciklama: "More lorem ipsum bacon ipsum.",
    src: is3,
  },
];
function SkillCardList(props) {
  return (
    <div className={classes.skillCardList}>
      <h2 className={classes.title}>SKILLS</h2>
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
        <NewImg1 {...data[0]}></NewImg1>
        <NewImg2 {...data[1]}></NewImg2>
        <NewImg3 {...data[2]}></NewImg3>
      </div>
    </div>
  );
}

export default SkillCardList;
