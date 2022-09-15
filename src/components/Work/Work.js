import React from "react";
import "./Work.scss";
import Nationwide from "../../Assets/Nationwide.png";
import Absolut from "../../Assets/absolut.png";
import Zippo from "../../Assets/zipp.png";
import Barb from "../../Assets/barbarian.png";

const Work = () => {
  //Project Information Objects//
  const featuredProject = {
    id: 1,
    client: "Zippo",
    title: "Zippo",
    info: "We did x, y and z",
  };

  const halfProjects = [
    {
      id: 1,
      client: "Nationwide",
      title: "Nationwide theme by H.E.R.",
      info: "Unique rendition of the Nationwide theme by H.E.R.",
      image: Nationwide,
    },
    {
      id: 2,
      client: "Absolut",
      title: "Absolut",
      info: "We did x, y and z",
      image: Absolut,
    },
  ];

  const threeProjects = [
    {
      id: 1,
      client: "Samsung",
      title: "Samsung Galaxy Z Fold3 5G",
      info: "We did x, y and z",
      image: Barb,
    },
    {
      id: 2,
      client: "Nationwide",
      title: "Nationwide theme by H.E.R.",
      info: "Unique rendition of the Nationwide theme by H.E.R.",
      image: Nationwide,
    },
    {
      id: 3,
      client: "Absolut",
      title: "Absolut",
      info: "We did x, y and z",
      image: Absolut,
    },
  ];

  //Project Information Objects//

  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">
            <img src={Zippo} alt="featured thumbnail" />
            <div className="project-desc">
              <p>{featuredProject.client}</p>
              <p>{featuredProject.info}</p>
            </div>
          </div>
        </div>
        <div className="two">
          {halfProjects.map((project) => (
            <div className="half">
              <img src={project.image} alt="thumbnail" />
              <div className="project-desc">
                <p>{project.client}</p>
                <p>{project.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="three">
          {threeProjects.map((project) => (
            <div className="third">
              <img src={project.image} alt="thumbnail" />
              <div className="project-desc">
                <p>{project.client}</p>
                <p>{project.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
