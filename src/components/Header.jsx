import React from "react";
import logo from "../assets/rearden-logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="contain">
            <div className="flex">
              <div className="col">
                <div className="info">
                  <span>
                    <FaEnvelope /> rearden@gmail.com
                  </span>
                  <span>
                    <FaPhoneAlt /> 0483 023 394
                  </span>
                </div>
              </div>
              <div className="col">
                <div className="social-icons">
                  <span>
                    <FaSquareFacebook />
                  </span>
                  <span>
                    <FaTwitterSquare />
                  </span>
                  <span>
                    <FaInstagramSquare />
                  </span>
                  <span>
                    <AiFillTikTok />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="contain flex">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Latest Projects</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li className="button">
                <button>REQUEST QOUTE</button>
              </li>
            </ul>
          </div>
        </div>
        <section className="banner">
          <div className="contain">
            <div className="content">
              <h4>Exeptional Roofing Solutions</h4>
              <h1>
                Welcom To <br />
                REARDEN ROOFING
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, molestiae inventore? Soluta a animi maiores
                corporis.
              </p>
              <button>REQUEST QOUTE</button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
