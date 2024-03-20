import { useState } from "react";
import css from "./auth-nav.module.css";
import sprite from "../../img/symbol-defs.svg";
import Modal from "../Modal/Modal";
import FormLogin from "../FormLogin/FormLogin";
import FormRegister from "../FormRegister/FormRegister";
const AuthNav=()=>{
    const [showLoginModal,setShowLoginModal]=useState(false);
    const [showRegisterModal,setShowRegisterModal]=useState(false);
    const openLoginModal= ()=>setShowLoginModal(true);
    const openRegisterModal=()=>setShowRegisterModal(true);
    const closeModals = () => {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    };
    return(
        <div className={css.authWrapper}>
            <div className={css.loginWrapper}>
                <button type="button"className={css.loginBtn} onClick={openLoginModal}>
                
                <svg className={css.loginIcon}>
                    <use href={`${sprite}#icon-log`}></use>
                </svg>
                Log in
                </button>
            {showLoginModal && (
                <Modal close={closeModals}>
                    <FormLogin/>
                </Modal>
            )}    
                
            </div>
            <button type="button" className={css.registrationBtn} onClick={openRegisterModal}>Registration</button>
            {showRegisterModal && (
                <Modal close={closeModals}>
                    <FormRegister/>
                </Modal>
            )}   
        </div>

    )
}
export default AuthNav;
