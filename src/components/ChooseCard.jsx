import React from "react";
import { LuPaintRoller } from "react-icons/lu";

const ChooseCard = ({ title }) => {
  return (
    <div>
      <div className="choose-card">
        <span>
          <LuPaintRoller />
          <h2>{title}</h2>
        </span>
      </div>
    </div>
  );
};

export default ChooseCard;
