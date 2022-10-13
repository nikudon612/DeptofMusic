import React, { useState } from "react";
import "./Work.scss";
import Nationwide from "../../Assets/Nationwide.png";
import Absolut from "../../Assets/absolut.png";
import Zippo from "../../Assets/zipp.png";
// import Barb from "../../Assets/barbarian.png";
import Sheep from "../../Assets/Sheep.png";
import Bud from "../../Assets/bud.png";
import cats from "../../Assets/cats.png";
import tmobile from "../../Assets/tmobile.png";
import Coke from "../../Assets/CokeZero.png";
import { Modal } from "@mui/material";
import "../Modals/FullModal.scss";
import { motion } from "framer-motion";

const Work = () => {
  //Project Information Objects//
  const featuredProject = {
    id: 1,
    client: "AbsoLut",
    title: "AbsoLut",
    info: "We did x, y and z",
    image: Absolut,
    link: "https://drive.google.com/file/d/17-LWxSpoCa-gONISwRKlgfFRK3mC2Ur_/preview",
  };

  const halfProjects = [
    {
      id: 1,
      client: "NatIonwIde",
      title: "Nationwide theme by H.E.R.",
      info: "Unique rendition of the Nationwide theme by H.E.R.",
      image: Nationwide,
      link: "https://drive.google.com/file/d/1yelACSoUs3uocnp-0LzZrWDB7SCNc59L/preview",
    },
    {
      id: 2,
      client: "VoLkswagon",
      title: "VoLkswagon Sheep",
      info: "We did x, y and z",
      image: Sheep,
      link: "https://drive.google.com/file/d/1QYl129nCVxVAGeL3aP6Oa4HR7LAqAIfh/preview",
    },
  ];

  const threeProjects = [
    // {
    //   id: 1,
    //   client: "Samsung",
    //   title: "Samsung Galaxy Z Fold3 5G",
    //   info: "We did x, y and z",
    //   image: Barb,
    //   link: "https://drive.google.com/file/d/1Kt_zlgHEPYMfDzKzmuhXQR2zzIbQnGKL/preview",
    // },
    {
      id: 1,
      client: "Samsung",
      title: "Samsung Galaxy Z Fold3 5G",
      info: "We did x, y and z",
      image: cats,
      link: "https://drive.google.com/file/d/1yYxAJXwWcYmP1_wuD6IeZmU08x7l3YaH/preview",
    },
    {
      id: 2,
      client: "BudweIser",
      title: "BudweIser",
      info: "We did x, y and z",
      image: Bud,
      link: "https://drive.google.com/file/d/1UnjuEYGv7h5IX_YvVVbVapWFgWI7i2Gw/preview",
    },
    {
      id: 3,
      client: "T-MobILe",
      title: "T-MobILe",
      info: "I feel pretty",
      image: tmobile,
      link: "https://drive.google.com/file/d/1ogHIsY4BcVwreUjqkNxbO0Nbrdu391YO/preview",
    },
  ];

  const secondHalfProjects = [
    {
      id: 1,
      client: "ZIppo",
      title: "ZIppo",
      info: "We did x, y and z",
      image: Zippo,
      link: "https://drive.google.com/file/d/13Pr8XVdciBgaJhI8yAcTH9WZxsrDGgx1/preview",
    },
    {
      id: 2,
      client: "Coke Zero",
      title: "Coke Zero",
      info: "We did x, y and z",
      image: Coke,
      link: "https://drive.google.com/file/d/1NpKLGSajxQfnbOXsV6vcLcwT_E2pKe99/preview",
    },
  ];

  //Project Information Objects//

  //Modal State//
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleClose = () => setOpen(false);
  //Modal State//

  return (
    <div className="work">
      {/* Video Modal */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          open={open}
          onClose={handleClose}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 3,
            delay: 0.5,
            ease: "linear",
          }}
        >
          <iframe
            src={modalData}
            allow="autoplay"
            title="portfolio"
            id="iframe"
            style={{
              // width: "80vw",
              // height: "50vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              outline: 0,
              border: "none",
            }}
          ></iframe>
        </motion.div>
      </Modal>
      {/* Video Modal */}

      <div className="grid">
        <div className="one">
          <div
            className="full"
            onClick={() => {
              setModalData(featuredProject.link);
              setOpen(true);
            }}
          >
            <img
              src={featuredProject.image}
              alt="featured thumbnail"
              id="featured-image"
            />
            {/* <img src={featuredProject.url} alt="featured gif" className="gif" /> */}
            <div className="project-desc">
              <p className="project-title">{featuredProject.client}</p>
              {/* <p>{featuredProject.info}</p> */}
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
                {/* <p>{project.info}</p> */}
              </div>
            </div>
          ))}
        </div>
        <div className="three">
          {threeProjects.map((project) => (
            <div
              className="third"
              key={project.id}
              onClick={() => {
                setModalData(project.link);
                setOpen(true);
              }}
            >
              <img src={project.image} alt="thumbnail" />
              <div className="project-desc">
                <p className="project-title">{project.client}</p>
                {/* <p>{project.info}</p> */}
              </div>
            </div>
          ))}
        </div>
        <div className="two">
          {secondHalfProjects.map((project) => (
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
                <motion.p
                  className="project-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 3,
                    delay: 0.5,
                    ease: "linear",
                  }}
                >
                  {project.client}
                </motion.p>
                {/* <p>{project.info}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
