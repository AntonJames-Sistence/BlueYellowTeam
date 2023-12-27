import React from 'react';

const CustomModal = ({ isOpen, onRequestClose, contentLabel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{contentLabel}</h2>
        <p>This is a custom modal window content.</p>
        <button onClick={onRequestClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default CustomModal;
