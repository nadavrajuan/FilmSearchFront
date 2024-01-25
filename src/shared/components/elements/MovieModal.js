import { Modal } from "react-responsive-modal";

const MovieModal = ({ open, children, onCloseModal }) => {
    const modalStyles = {
        overlay: {
            backgroundСolor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)'
        },
      };
  return (
    <Modal open={open} onClose={onCloseModal} center styles={modalStyles}>
        
      {children}
    </Modal>
  );
};

export default MovieModal;
