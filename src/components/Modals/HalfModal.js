import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../Modals/FullModal.scss";
import Nationwide from "../../Assets/Nationwide.png";
import Absolut from "../../Assets/absolut.png";

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

const HalfModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bc-IaRuFWpI"
        onClose={() => setOpen(false)}
      />
      <div>{}</div>
      <img src={Nationwide} onClick={() => setOpen(true)} alt="fuckoff" />
    </React.Fragment>
  );
};

export default HalfModal;
