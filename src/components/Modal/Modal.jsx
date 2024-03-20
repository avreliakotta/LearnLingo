import { useEffect } from "react";
import css from "./modal.module.css";
import {createPortal} from "react-dom";
import sprite from "../../img/symbol-defs.svg";
const modalRoot = document.querySelector('#modal-root');
const Modal=({children, close})=>{
    const closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === 'Escape') {
          close();
        }
      };
      useEffect(()=>{
        document.addEventListener('keydown', closeModal);
        return () => document.removeEventListener('keydown', closeModal);
      },[])
    return(
        createPortal(
        <div className={css.backdrop} onClick={closeModal}>
             <div className={css.modal} >
        <button className={css.closeBtn} onClick={close}>
          <svg className={css.closeIcon}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        {children}
      </div>
        </div>,
        
        modalRoot
        )
    )
}
export default Modal;