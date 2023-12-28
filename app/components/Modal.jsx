import React from 'react';

const ThankYouModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-40">
      <div className="flex flex-col bg-white p-6 rounded-xl shadow-md w-[50vw]">
        <h2 className="text-xl font-extrabold mb-8 self-center">Thank You!</h2>
        <p className="text-base font-semibold">
            Every dollar you've contributed is a step closer to creating a brighter future for those who rely on our assistance. Your kindness resonates deeply with us, and it motivates us to work tirelessly towards our shared goals.<br/><br/>
            Please note that our organization is 501c3 certified, and 100% of every donation is tax deductible. We will send you a confirmation code to the email provided during your checkout process.<br/><br/>
            Gratefully,<br/>
            Blue & Yellow Foundation
        </p>
        <button
          className="bg-blue-500 self-center hover:bg-blue-700 text-white font-bold py-2 px-6 mt-8 rounded-xl focus:outline-none focus:shadow-outline"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
