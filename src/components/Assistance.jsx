import React from "react";
import { FaHouseUser } from "react-icons/fa6";
const Assistance = () => {
  return (
    <div>
      <section className="assistance">
        <div className="contain">
          <div className="assistance-content">
            <h5>Tech Assistance</h5>
            <h1>Technical Assistance</h1>
          </div>
          <div className="flex">
            <div className="assist-card">
              <div className="icon">
                <FaHouseUser className="house-user" />
              </div>
              <div className="card-content">
                <h3>Where can i get help filling out my application?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur minima cupiditate fuga voluptatum aliquid officia
                  incidunt atque tempora ullam voluptas?
                </p>
              </div>
            </div>
            <div className="assist-card">
              <div className="icon">
                <FaHouseUser className="house-user" />
              </div>
              <div className="card-content">
                <h3>Where can i get help filling out my application?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur minima cupiditate fuga voluptatum aliquid officia
                  incidunt atque tempora ullam voluptas?
                </p>
              </div>
            </div>
          </div>
          <div className="assist-contact">
            <h2>For Questions, contact</h2>
            <h1>REARDEN ROOFING at (0483) 023 394</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assistance;
