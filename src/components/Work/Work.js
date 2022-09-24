import React, { useState } from "react";
import "./Work.scss";
import Nationwide from "../../Assets/Nationwide.png";
import Absolut from "../../Assets/absolut.png";
import Zippo from "../../Assets/zipp.png";
import Barb from "../../Assets/barbarian.png";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FullModal from "../Modals/FullModal";

const Work = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
      link: "https://drive.google.com/file/d/1yelACSoUs3uocnp-0LzZrWDB7SCNc59L/preview",
    },
    {
      id: 2,
      client: "Absolut",
      title: "Absolut",
      info: "We did x, y and z",
      image: Absolut,
      link: "https://drive.google.com/file/d/17-LWxSpoCa-gONISwRKlgfFRK3mC2Ur_/preview",
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
  //Modal State//
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Modal State//

  return (
    <div className="work">
      <div className="grid">
        <div className="one">
          <div className="full">
            <img src={Zippo} alt="featured thumbnail" />
            <div className="project-desc">
              <p className="project-title">{featuredProject.client}</p>
              <p>{featuredProject.info}</p>
            </div>
          </div>
        </div>
        <div className="two">
          {halfProjects.map((project) => (
            <div
              className="half"
              key={project.id}
              onClick={() => {
                setModalData(project.link);
                setOpen(true);
              }}
            >
              <img src={project.image} alt="thumbnail" />
              <div className="project-desc">
                <p className="project-title">{project.client}</p>
                <p>{project.info}</p>
              </div>
            </div>
          ))}
          {/* Video Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <iframe
                src={modalData}
                width="640"
                height="480"
                allow="autoplay"
                title="nationwide"
              ></iframe>
            </Box>
          </Modal>
          {/* Video Modal */}
        </div>
        <div className="three">
          {threeProjects.map((project) => (
            <div className="third" key={project.id}>
              <img src={project.image} alt="thumbnail" />
              <div className="project-desc">
                <p className="project-title">{project.client}</p>
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
