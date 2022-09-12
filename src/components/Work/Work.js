import React from "react";
import "./Work.scss";
// import Nationwide from "../../Assets/Videos/nationwide.mov";

const Work = () => {
  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">
            <video width="100%" height="100%" controls>
              {/* <source src={Nationwide} type="video/mp4" /> */}
            </video>
            {/* <iframe
              title="full video"
              src="https://www.youtube.com/embed/bgr4sGq2ba0?autoplay=0"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe> */}
          </div>
        </div>
        <div className="two">
          <div className="half">
            <iframe
              title="half video"
              src="https://www.youtube.com/embed/bgr4sGq2ba0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="half">
            <iframe
              //   title="half video"
              src="https://player.vimeo.com/video/78421150?h=8aa689e131&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
        <div className="three">
          <div className="third">
            <iframe
              title="third video"
              src="https://www.youtube.com/embed/bgr4sGq2ba0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="third">third</div>
          <div className="third">third</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
