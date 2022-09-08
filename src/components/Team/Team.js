import React from "react";
import "./Team.scss";
import Freeman from "../../Assets/michaelfreeman.jpeg";

const Team = () => {
  return (
    <div className="team">
      <div className="team-title">Our Team</div>
      <div className="team-outer-container">
        <div className="team-container">
          <div className="team-info">
            <span className="employee">Michael Freeman</span>
            <span className="role">Founder</span>
            <span className="desc">
              Background info - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </span>
          </div>
        </div>

        <div className="image">
          <img src={Freeman} alt="employee headshot" />
        </div>
      </div>
    </div>
  );
};

export default Team;
