import { Modal } from "react-responsive-modal";

const MovieModal = ({ open, children, onCloseModal }) => {
  const modalStyles = {
    overlay: {
      backgroundСolor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      transition: "background-color 0.3s ease",
    },
    modal: {
        background: "#201C1C", 
        borderRadius: "10px", 
        padding: "20px", 
        color: "white",    
      },
      closeIcon: {
        fill: "white", 
        width: "30px",
        height: "30px",
      },
  };
  return (
    <Modal open={open} onClose={onCloseModal} center styles={modalStyles}>
      {children}
    </Modal>
  );
};

export default MovieModal;
