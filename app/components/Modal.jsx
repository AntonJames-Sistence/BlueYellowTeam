import React, { useEffect } from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, contentLabel }) => {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      // Add necessary styling and content for your modal here
    >
      <div>
        {/* Modal content */}
        <h2>Thank You for Your Donation!</h2>
        {/* Add any other content or components for the modal */}
      </div>
    </Modal>
  );
};

export default CustomModal;
