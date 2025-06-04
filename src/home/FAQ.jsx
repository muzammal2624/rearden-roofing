import React from "react";
import image from "../assets/Screenshot.png";
import FaqPoint from "../components/FaqPoint";
const FAQ = () => {
  return (
    <div>
      <section className="faqs">
        <div className="contain">
          <div className="faqs-content">
            <h6>FAQ's</h6>
            <h2>
              Frequently Asked <br />
              Questions
            </h2>
          </div>
          <div className="flex">
            <div className="col">
              <div className="faq-left">
                <div className="image">
                  <img src={image} alt="" />
                </div>
                <div className="faq-points">
                  <h2>
                    <i className="fa-solid fa-arrow-right"></i> Relaible &
                    Trustworthy
                  </h2>
                  <p>
                    We prioritize honesty, professinalism and top tier services
                  </p>
                  <h2>
                    <i className="fa-solid fa-arrow-right"></i> Relaible &
                    Trustworthy
                  </h2>
                  <p>
                    We prioritize honesty, professinalism and top tier services
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="faq-right">
                <FaqPoint />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
