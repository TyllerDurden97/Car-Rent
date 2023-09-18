import css from './Modal.module.css';
import svg from '../../images/symbol-defs.svg';
import  { React, useEffect } from "react";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  

    useEffect(() => {

        const hendleEscClose = event => {
            if (event.code === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', hendleEscClose)
        return () => window.removeEventListener('keydown', hendleEscClose);
        
    }, [onClose]);
    
    
    const hendleBackdropClose = event => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

   return (
      createPortal(<div className={css.overlay} onClick={hendleBackdropClose }>
            <div className={css.modal}>
               <div className={css.closebtn} onClick={onClose} >
                  <svg className={css.icon} width="18" height="18">
                      <use href={`${svg}#icon-x`}></use>
                  </svg>
               </div>
                  {children}
            </div>
      </div>, modalRoot)
         
   )
};

export default Modal;