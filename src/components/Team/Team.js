import React from "react";
import "./Team.scss";
import Freeman from "../../Assets/DoM-Oscar-HiRes.png";
import Kaplan from "../../Assets/DoM-BrandAssets-Walrus-32.png";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="team">
      <div className="team-outer-outer-container">
        <motion.div
          className="team-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 2,
            delay: 0.1,
            ease: "linear",
          }}
        >
          Our Team
        </motion.div>
        <div className="team-outer-container">
          <motion.div
            className="team-inner-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 2,
              delay: 0.4,
              ease: "linear",
            }}
          >
            <div className="team-container">
              <div className="team-info">
                <span className="employee">Michael Freeman</span>
                <span className="role">Co-Founder / Creative Director</span>
              </div>
            </div>
            <div className="image">
              <img src={Freeman} alt="Oscar the Pup logo" />
            </div>
          </motion.div>
          <div className="team-outer-container">
            <motion.div
              className="team-inner-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.8,
                ease: "linear",
              }}
            >
              <div className="team-container">
                <div className="team-info">
                  <span className="employee">Robert Kaplan</span>
                  <span className="role">Co-Founder / Managing Director</span>
                </div>
              </div>

              <div className="image">
                <img src={Kaplan} alt="Walrus logo" className="walrus" />
              </div>
            </motion.div>
            <Link to="navbar" smooth={true} duration={1250}>
              <ExpandCircleDownIcon className="circle" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
