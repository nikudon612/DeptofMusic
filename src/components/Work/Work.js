import React from "react";
import "./Work.scss";
// import Nationwide from "../../Assets/Videos/nationwide.mov";

const Work = () => {
  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">Full</div>
        </div>
        <div className="two">
          <div className="half">
            <a href="/">
              <img className="static" src="" />
              <img className="active" src="" />
            </a>
          </div>
          <div className="half">half</div>
        </div>
        <div className="three">
          <div className="third">third</div>
          <div className="third">third</div>
          <div className="third">third</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
