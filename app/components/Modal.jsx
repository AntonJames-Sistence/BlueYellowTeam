import React from 'react';

const ThankYouModal = ({ isOpen, onRequestClose, contentLabel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{contentLabel}</h2>
        <p className="text-base mb-4">This is a custom modal window content.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onRequestClose}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
