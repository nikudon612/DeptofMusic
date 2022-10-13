import React from "react";
import "./About.scss";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 2,
              delay: 0.1,
              ease: "linear",
            }}
          >
            About Us
          </motion.div>
          <motion.div
            className="text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 2,
              delay: 0.4,
              ease: "linear",
            }}
          >
            <span>
              Hello! We’re your friendly neighborhood music department.
              <br />
              <br />
              Whether you need a search, some help with licensing, original
              music production, talent negotiation, sonic branding or anything
              else from the world of sound, we’re here to help as an
              out-sourced, in-house part of your team.
              <br />
              <br />
              <span className="highlighted-text">
                Drop us a line. We’d love to hear from you.
              </span>
            </span>
          </motion.div>
          <div className="contact-container">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.6,
                ease: "linear",
              }}
            >
              <span className="name">Michael Freeman</span>
              <a href="mailto:michael@deptofmusic.com" className="email">
                michael@deptofmusIc.com
              </a>
            </motion.div>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.7,
                ease: "linear",
              }}
            >
              <span className="name">Robert Kaplan</span>
              <a href="mailto:rob@deptofmusic.com" className="email">
                robert@deptofmusIc.com
              </a>
            </motion.div>
          </div>
        </div>

        {/* <div className="circle-con">
          <Link to="contact" smooth={true} duration={750}>
            <ExpandCircleDownIcon className="circle" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default About;
