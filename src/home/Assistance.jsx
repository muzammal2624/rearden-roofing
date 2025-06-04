import React from "react";
import { FaHouseUser } from "react-icons/fa6";
import { AssistCard } from "../components/AssistCard";
const Assistance = () => {
  const CardDetails = [
    {
      title: "Where can i get help filling out my application?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima cupiditate fuga voluptatum aliquid officia incidunt atque tempora ullam voluptas?",
    },
    {
      title: "Where can i get help filling out my application?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima cupiditate fuga voluptatum aliquid officia incidunt atque tempora ullam voluptas?",
    },
  ];
  return (
    <div>
      <section className="assistance">
        <div className="contain">
          <div className="assistance-content">
            <h5>Tech Assistance</h5>
            <h1>Technical Assistance</h1>
          </div>
          <div className="flex">
            {CardDetails.map((val, i) => {
              return (
                <div className="col" key={i}>
                  <AssistCard {...val} />
                </div>
              );
            })}
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
