import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <span className="title">SAy HELLO</span>
        <div className="contact-info">
          <span className="city">New York</span>
          <span>1 S 1st Street,</span>
          <span>Brooklyn, NY, 10010</span>
          <span>(123)-456-7890</span>
          <a href="mailto:michael@deptofmusic.com" className="email">
            info@deptofmusic.com
          </a>
          <div className="person">
            <span className="sub-title">Contact:</span>
            <span className="human">Michael Freeman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
