import React from "react";
import "./Footer.scss";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="location-info">
        <span className="city">New York</span>
        {/* <span>1 S 1st Street,</span>
        <span>Brooklyn, NY, 10010</span> */}
        <span>(617) 974-2683</span>
        <a href="mailto:michael@deptofmusic.com" className="email">
          info@deptofmusic.com
        </a>
      </div>
      <div className="outer-link-container">
        <div className="linkContainer">
          {/* <div className="socials">
            <a href="https://www.instagram.com/freemanagogo/">Instagram</a>
            <a href="twitter.com">Twitter</a>
            <a href="facebook.com">Facebook</a>
          </div> */}
          <div className="pageLinks">
            <Link to="work" smooth={true} duration={750}>
              Work
            </Link>
            <Link to="about" smooth={true} duration={750}>
              About
            </Link>
            <Link to="contact" smooth={true} duration={750}>
              Contact
            </Link>
          </div>
        </div>
        <div className="trademark">
          <span>©DEPARTMENT OF MUSIC EST. 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
