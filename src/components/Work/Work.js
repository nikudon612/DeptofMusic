import React from "react";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">
            full
            <img />
          </div>
        </div>
        <div className="two">
          <div className="half">half</div>
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
