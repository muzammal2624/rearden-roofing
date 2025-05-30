import React from "react";
import image from "../assets/Screenshot.png";
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
                <ul id="accordian">
                  <li>
                    <label for="first">
                      What is a roofing microbusiness
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </label>
                    <input type="radio" name="accordian" id="first" checked />
                    <div className="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat temporibus earum fugiat ullam eum! Veniam
                        esse repellendus, illum repudiandae perferendis
                        inventore. Est, molestiae ex architecto sit temporibus
                        veritatis possimus quidem.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label for="second">
                      What is a roofing microbusiness
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </label>
                    <input type="radio" name="accordian" id="second" checked />
                    <div className="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat temporibus earum fugiat ullam eum! Veniam
                        esse repellendus, illum repudiandae perferendis
                        inventore. Est, molestiae ex architecto sit temporibus
                        veritatis possimus quidem.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label for="third">
                      What is a roofing microbusiness
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </label>
                    <input type="radio" name="accordian" id="third" checked />
                    <div className="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat temporibus earum fugiat ullam eum! Veniam
                        esse repellendus, illum repudiandae perferendis
                        inventore. Est, molestiae ex architecto sit temporibus
                        veritatis possimus quidem.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label for="four">
                      What is a roofing microbusiness
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </label>
                    <input type="radio" name="accordian" id="four" checked />
                    <div className="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat temporibus earum fugiat ullam eum! Veniam
                        esse repellendus, illum repudiandae perferendis
                        inventore. Est, molestiae ex architecto sit temporibus
                        veritatis possimus quidem.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
