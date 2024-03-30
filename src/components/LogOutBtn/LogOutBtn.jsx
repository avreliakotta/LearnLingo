import css from "./log-out-btn.module.css";
import sprite from "../../img/symbol-defs.svg";
export const LogOutBtn=({onClick})=>{
    return(
        <button type="button" className={css.logOutBtn} onClick={onClick}>
Log out
<svg className={css.loginIcon}>
                    <use href={`${sprite}#icon-log`}></use>
                </svg>
        </button>
    )
}