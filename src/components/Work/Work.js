import React from "react";
import "./Work.scss";
import Nationwide from "../../Assets/Nationwide.png";
import Absolut from "../../Assets/absolut.png";
import Zippo from "../../Assets/zipp.png";
import Barb from "../../Assets/barbarian.png";

const Work = () => {
  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">
            {/* ALTERNATIVE VIEW OF 50VH FEATURED */}

            {/* <img src={Zippo} alt="nationwide thumbnail" />
            <div className="project-desc-full">
              <p>Track Title</p>
              <p>Project Info</p>
            </div> */}

            {/* ALTERNATIVE VIEW OF 50VH FEATURED */}

            <img src={Zippo} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="half">
            <img src={Nationwide} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
          <div className="half">
            <img src={Absolut} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
        </div>
        <div className="three">
          <div className="third">
            <img src={Barb} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
          <div className="third">
            <img src={Barb} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
          <div className="third">
            <img src={Barb} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
        </div>
        {/* <div className="two">
          <div className="half">
            <img src={Nationwide} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
          <div className="half">
            <img src={Absolut} alt="nationwide thumbnail" />
            <div className="project-desc">
              <p>Track Title</p>
              <p>Project Info</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
