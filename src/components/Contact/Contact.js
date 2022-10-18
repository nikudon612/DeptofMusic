import React from "react";
import "./Contact.scss";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="title"
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
          SAy HELLO
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
            <span>Creative Director</span>
            <a href="mailto:michael@deptofmusic.com" className="email">
              michael@deptofmusic.com
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
            <span>Managing Director</span>
            <a href="mailto:robert@deptofmusic.com" className="email">
              robert@deptofmusic.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* <Link to="team" smooth={true} duration={750}>
        <ExpandCircleDownIcon className="circle" />
      </Link> */}
    </div>
  );
};

export default Contact;
