import React from "react";
import footerLogo from "../assets/footer logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="contain">
          <div class="flex">
            <div class="row">
              <div class="col col1">
                <div class="logo-details">
                  <div class="footer-logo">
                    <img src={footerLogo} alt="" />
                  </div>
                  <div class="footer-info">
                    <p>
                      <i class="fa-solid fa-envelope"></i> (530)403-9830
                    </p>
                    <p>
                      <i class="fa-solid fa-phone"></i>
                      <span>
                        Feather road blvd
                        <br />
                        STE C <br />
                        Oroville CA 95965
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col2">
                <div class="shop">
                  <h2>Shop</h2>
                  <ul>
                    <li>
                      <a href="#">Roofing Materials</a>
                    </li>
                    <li>
                      <a href="#">Re-roofing Solutions</a>
                    </li>
                    <li>
                      <a href="#">Exclusive Offers</a>
                    </li>
                    <li>
                      <a href="#">Tools & Accessories</a>
                    </li>
                    <li>
                      <a href="#">Insurance & Coverage</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col3">
                <div class="footer-assistance">
                  <h2>Assistance</h2>
                  <ul>
                    <li>
                      <a href="#">Product Support</a>
                    </li>
                    <li>
                      <a href="#">Installation Guide</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Warranty Information</a>
                    </li>
                    <li>
                      <a href="#">Re-roofing FAQ's</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col4">
                <div class="company">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Why REARDEN?</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                      <a href="#">Manage Cookie</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col5">
                <div class="newsletter">
                  <p>
                    Subscribe to REARDEN newsletter for Exclusive updates on
                    Products & Offers
                  </p>
                  <div class="input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="@Email Address"
                    />
                    <span>
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <div class="flex">
          <div class="text">
            <p>Copyright @2025 REARDEN ROOFING All Rights Reserved</p>
          </div>
          <div class="social-icons">
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
  );
};

export default Footer;
