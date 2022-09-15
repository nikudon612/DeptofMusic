import React from "react";
import "./Team.scss";
import Freeman from "../../Assets/DoM-Oscar-HiRes.png";
import Kaplan from "../../Assets/DoM-BrandAssets-Walrus-32.png";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Team = () => {
  return (
    <div className="team">
      <div className="team-outer-outer-container">
        <div className="team-title">Our Team</div>
        <div className="team-outer-container">
          <div className="team-inner-container">
            <div className="team-container">
              <div className="team-info">
                <span className="employee">Michael Freeman</span>
                <span className="role">Co-Founder / Creative Director</span>
              </div>
            </div>
            <div className="image">
              <img src={Freeman} alt="Oscar the Pup logo" />
            </div>
          </div>
          <div className="team-outer-container">
            <div className="team-inner-container">
              <div className="team-container">
                <div className="team-info">
                  <span className="employee">Robert Kaplan</span>
                  <span className="role">Co-Founder / Managing Director</span>
                </div>
              </div>

              <div className="image">
                <img src={Kaplan} alt="Walrus logo" className="walrus" />
              </div>
            </div>
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
