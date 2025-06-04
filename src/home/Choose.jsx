import React from "react";
import { LuPaintRoller } from "react-icons/lu";
import ChooseCard from "../components/ChooseCard";

const Choose = () => {
  const ChooseItem = [
    {
      title: "Quality Materials",
    },
    {
      title: "Quality Materials",
    },
  ];
  return (
    <>
      <section className="choose">
        <div className="contain">
          <div className="choose-content">
            <h6>Why choose us?</h6>
            <h1>
              Few Reasons to choose <br />
              our conpmany
            </h1>
            <p>
              We go above and beyond to deliver exceptional services, ensuring
              your satisfaction every step of the way. Our commitment to quality
              , attention to detail, and passion for excellence set us apart
            </p>

            <div className="flex">
              {ChooseItem.map((val, i) => {
                return (
                  <div className="col" key={i}>
                    <ChooseCard {...val} />
                  </div>
                );
              })}
            </div>
            <div className="flex">
              {ChooseItem.map((val, i) => {
                return (
                  <div className="col" key={i}>
                    <ChooseCard {...val} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
