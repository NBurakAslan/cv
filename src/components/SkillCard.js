import React from "react";
import Skill from "./Skill";
import classes from "./SkillCard.module.css";
function SkillCard(props) {
  return (
    <div className={classes.container}>
      <div>
        <Skill value={props.percen} />
      </div>
      <h4>{props.name}</h4>
      <p>
        Tempor dolor deserunt adipisicing non reprehenderit. Sint aliqua non
        Lorem sit non cillum nostrud. Fugiat aliquip ad nisi officia. Tempor et
        ipsum esse Lorem quis labore ex cupidatat est aliqua id elit incididunt.
        Sit ut qui dolore incididunt duis officia. Adipisicing enim non
        consectetur duis est do ut elit. Amet minim ad nostrud commodo eu culpa
        veniam ea voluptate.
      </p>
    </div>
  );
}

export default SkillCard;
