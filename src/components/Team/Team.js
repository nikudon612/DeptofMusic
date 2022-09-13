import React from "react";
import "./Team.scss";
import Freeman from "../../Assets/deptstaff-1.jpg";
import Kaplan from "../../Assets/deptstaff-2.jpg";
// import Oscar from "../../Assets/oscar.jpg";

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
              {/* <img src={Oscar} alt="employee headshot" /> */}
            </div>
          </div>
          <div className="team-outer-container">
            <div className="team-inner-container">
              <div className="team-container">
                <div className="team-info">
                  <span className="employee">Robert Kaplan</span>
                  <span className="role">Managing Director</span>
                  <span className="desc">
                    Background info - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </span>
                </div>
              </div>

              <div className="image">
                <img src={Kaplan} alt="employee headshot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
