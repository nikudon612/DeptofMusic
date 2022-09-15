import React from "react";
import "./Contact.scss";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <span className="title">SAy HELLO</span>
        <div className="contact-info">
          <span className="city">New York</span>
          {/* <span>1 S 1st Street,</span>
          <span>Brooklyn, NY, 10010</span> */}
          <span>(617) 974-2683</span>
          <a href="mailto:michael@deptofmusic.com" className="email">
            info@deptofmusic.com
          </a>
          <div className="person">
            <span className="sub-title">Contact:</span>
            <span className="human">Michael Freeman</span>
          </div>
        </div>
      </div>

      <Link to="team" smooth={true} duration={750}>
        <ExpandCircleDownIcon className="circle" />
      </Link>
    </div>
  );
};

export default Contact;
