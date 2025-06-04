import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const ContactCardDetail = [
    {
      title: "Phone Number",
      description: "(530)403-9830",
    },
    {
      title: "Email Address",
      description: "info@reardenltd.com.au",
    },
    {
      title: "2560 Feather River Blvd STE C",
      description: "(530)403-9830",
    },
  ];
  return (
    <div>
      <section className="contact">
        <div className="contain">
          <div className="contact-content">
            <h6>Contact Us</h6>
            <h2>How Can We Help You?</h2>
            <p>
              If you need help with our services, have questions about your
              work, or are experiencing <br />
              any difficulties, please do not to hesitate to contact us.
            </p>
          </div>
          <div className="flex">
            {ContactCardDetail.map((val, i) => {
              return (
                <div className="col" key={i}>
                  <ContactCard {...val} />
                </div>
              );
            })}
          </div>

          <div className="form">
            <form action="">
              <div className="form-heading">
                <h2>Get in Touch</h2>
              </div>
              <div className="input-group">
                <div>
                  <label for="">Full name</label>
                  <input type="text" placeholder="eg: John Wick" />
                </div>
                <div>
                  <label for="">Email Address</label>
                  <input type="text" placeholder="eg: sample@gmail.com" />
                </div>
              </div>
              <div className="input-group">
                <div>
                  <label for="">Phone Number</label>
                  <input type="text" placeholder="eg: +1 234 567890" />
                </div>
                <div>
                  <label for="">Subject</label>
                  <input type="text" placeholder="eg: Lorem ipsum dolor sit" />
                </div>
              </div>
              <div className="input-group message">
                <div>
                  <label for="">Message</label>
                  <textarea name="" id="" rows="10"></textarea>
                </div>
              </div>
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
