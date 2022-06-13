import React from "react";
import "./SkillImgCard.css";

function SkillImgCard({ className, src, title, aciklama, paragh }) {
  return (
    <div className={className}>
      <div className="tile">
        <img src={src} alt="Program" />
        <div className="text">
          <h1>{title}</h1>
          <h2 className="animate-text">{aciklama}</h2>
          <p className="animate-text">{paragh}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillImgCard;
