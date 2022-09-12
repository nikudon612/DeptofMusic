import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="location-info">
        <span className="city">New York</span>
        <span>1 S 1st Street,</span>
        <span>Brooklyn, NY, 10010</span>
        <span>(123)-456-7890</span>
        <a href="mailto:michael@deptofmusic.com" className="email">
          info@deptofmusic.com
        </a>
      </div>
      <div className="outer-link-container">
        <div className="linkContainer">
          <div className="socials">
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
          </div>
          <div className="pageLinks">
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Contact</a>
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
