import React from "react";
import { FaHouseUser } from "react-icons/fa6";
export const AssistCard = (props) => {
  const { title, description } = props;
  return (
    <div>
      {" "}
      <div className="assist-card">
        <div className="icon">
          <FaHouseUser />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
