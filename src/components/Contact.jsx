import React from "react";

const Contact = () => {
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
            <div className="assist-card">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="card-content">
                <h3>Phone Number</h3>
                <p>(530)403-9830</p>
              </div>
            </div>
            <div className="assist-card">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="card-content">
                <h3>Email Address</h3>
                <p>info@reardenltd.com.au</p>
              </div>
            </div>
            <div className="assist-card">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="card-content">
                <p>
                  2560 Feather River Blvd <br />
                  STE C
                </p>
                <p>Oraville CA 95965</p>
              </div>
            </div>
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
