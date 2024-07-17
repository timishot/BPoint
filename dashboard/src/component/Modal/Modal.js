import React, { useContext } from 'react';
import './Modal.css';
import { ModalContext } from '../../Context/ModalProvider';

const Modal = () => {
  const { modal } = useContext(ModalContext);

  if (!modal.show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{modal.message}</p>
        <div className='good'>
            <i class="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;