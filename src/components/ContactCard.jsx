import React from "react";

const ContactCard = (props) => {
  const { title, description } = props;
  return (
    <div>
      {" "}
      <div className="assist-card">
        <div className="icon">
          <i className="fa-solid fa-phone"></i>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
