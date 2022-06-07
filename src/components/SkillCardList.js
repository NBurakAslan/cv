import React from "react";
import SkillCard from "./SkillCard";
import classes from "./SkillCardList.module.css";
function SkillCardList(props) {
  const skills = [
    { name: "HTML", percen: 70 },
    { name: "CSS", percen: 70 },
    { name: "Javascript", percen: 90 },
    { name: "React.js", percen: 85 },
    { name: "TSQL", percen: 80 },
  ];
  return (
    <div className={classes.skillCardList}>
      {skills.map(card => (
        <SkillCard></SkillCard>
      ))}
    </div>
  );
}

export default SkillCardList;
