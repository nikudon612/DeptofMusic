import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../Modals/FullModal.scss";
import Zippo from "../../Assets/zipp.png";

const FullModal = () => {
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

      <img src={Zippo} onClick={() => setOpen(true)} alt="fuckoff" />
    </React.Fragment>
  );
};
export default FullModal;
