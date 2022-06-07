import React from "react";
import Skill from "./Skill";
import "./SkillCard.css";
function SkillCard(props) {
  return (
    <div class='container'>
      <div class='card'>
        <div class='box'>
          <div class='percent'>
            <Skill />
          </div>
          <h2 class='text'>Html</h2>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
