import React from "react";
import Modal from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WorkModal = ({ handleClose, handleOpen, open }) => {
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
  return (
    <div className="workModal">
      {/* Video Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {/* Video Modal */}{" "}
    </div>
  );
};

export default WorkModal;

<div>
  {allProjects.map((project) => (
    <div className="full" onClick={setIsOpen(true)}>
      <img src={project.image} alt="featured thumbnail" />
      <div className="project-desc">
        <p className="project-title">{project.client}</p>
        <p>{project.info}</p>
      </div>
    </div>
  ))}
</div>;
