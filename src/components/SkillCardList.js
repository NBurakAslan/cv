import React from "react";
import SkillCard from "./SkillCard";
import classes from "./SkillCardList.module.css";
function SkillCardList(props) {
  const skills = [
    { name: "HTML", percen: 70 },
    { name: "CSS", percen: 70 },
    { name: "Javascript", percen: 90 },
    { name: "React.js", percen: 85 },
    { name: "Node.js", percen: 70 },
    { name: "TSQL", percen: 80 },
    { name: "EXCEL", percen: 95 },
    { name: "SAP IS-U", percen: 80 },
  ];
  return (
    <>
      <h2>SKILLS</h2>
      <div className={classes.skillCardList}>
        {skills.map((card) => (
          <SkillCard {...card}></SkillCard>
        ))}
      </div>
    </>
  );
}

export default SkillCardList;
