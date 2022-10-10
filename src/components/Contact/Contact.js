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
        <div className="contact-info">
          <motion.div
            className="contact-first-box"
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
            {/* <span className="city">New York</span> */}
            <a href="mailto:michael@deptofmusic.com" className="email">
              info@deptofmusic.com
            </a>
            <span>(617) 974-2683</span>
          </motion.div>
          <motion.div
            className="person"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 2,
              delay: 0.8,
              ease: "linear",
            }}
          >
            <span className="sub-title">Contact:</span>
            <span className="human">Michael Freeman</span>
          </motion.div>
        </div>
      </div>

      <Link to="team" smooth={true} duration={750}>
        <ExpandCircleDownIcon className="circle" />
      </Link>
    </div>
  );
};

export default Contact;
