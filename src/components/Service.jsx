import React from "react";
import img from "../assets/construction-hero@2x.webp";
const Service = () => {
  return (
    <>
      <section className="services">
        <div className="contain">
          <div className="service-content">
            <h6>Our Services</h6>
            <h1>
              We are providing quaity <br />
              roofing services
            </h1>
          </div>
          <div className="flex">
            <div className="col">
              <div className="service-card">
                <div className="image">
                  <img src={img} alt="" />
                </div>

                <div className="card-content">
                  <h2>Single Play Roofing</h2>
                  <p>
                    Your roof is your most important asset.Not only will it
                    protect your family and possessions from the harsh
                    Australian conditions, it will also add a touch of style and
                    beauty to your home
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="image">
                  <img src={img} alt="" />
                </div>

                <div className="card-content">
                  <h2>Single Play Roofing</h2>
                  <p>
                    Your roof is your most important asset.Not only will it
                    protect your family and possessions from the harsh
                    Australian conditions, it will also add a touch of style and
                    beauty to your home
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="image">
                  <img src={img} alt="" />
                </div>

                <div className="card-content">
                  <h2>Single Play Roofing</h2>
                  <p>
                    Your roof is your most important asset.Not only will it
                    protect your family and possessions from the harsh
                    Australian conditions, it will also add a touch of style and
                    beauty to your home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
