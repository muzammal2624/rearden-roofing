import React from "react";
import image from "../assets/Construction-Site-Safety-Hero-Image.webp";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="about-content">
                <h5>About</h5>
                <h1>Experienced & quality roofing services providers</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  nam est vel expedita suscipit nihil libero eaque amet
                  delectus? Incidunt voluptatibus voluptas aliquam dolore vel
                  voluptatum magni ut iusto quas?
                </p>
                <div className="points">
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                </div>
                <div className="points">
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                </div>
                <div className="points">
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>Accurate Testing
                    Process
                  </span>
                </div>
                <button>Learn More</button>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
