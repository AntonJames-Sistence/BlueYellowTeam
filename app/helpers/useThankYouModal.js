'use client';
import { useState, useEffect } from 'react';

const useThankYouModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const thankYouNote = urlParams.get('thankyounote');
    if (thankYouNote) {
      setShowModal(true);
    }
  }, []);

  return {
    showModal,
    setShowModal,
  };
};

export default useThankYouModal;
