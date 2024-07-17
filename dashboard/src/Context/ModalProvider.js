import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ show: false, message: '' });

  const showModal = (message) => {
    setModal({ show: true, message });
    setTimeout(() => {
      setModal({ show: false, message: '' });
    }, 2000);
  };

  return (
    <ModalContext.Provider value={{ modal, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;