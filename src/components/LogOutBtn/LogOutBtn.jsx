import css from "./log-out-btn.module.css";
import sprite from "../../img/symbol-defs.svg";
export const LogOutBtn=()=>{
    return(
        <button type="button" className={css.logOutBtn}>
Log out
<svg className={css.loginIcon}>
                    <use href={`${sprite}#icon-log`}></use>
                </svg>
        </button>
    )
}