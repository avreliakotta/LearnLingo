import {NavLink} from "react-router-dom";
import sprite from '../../img/symbol-defs.svg';
import css from "./header.module.css";
import  AuthNav from "../AuthNav/AuthNav";

const Header = ()=>{
    
    return(
        <header className={css.headerSection}>
            <div className={css.logoWrap}>
            <svg className={css.logoIcon} >
                <use href={`${sprite}#icon-logo`}></use>
            </svg>
            <p className={css.logoText}>LearnLingo</p>
            </div>
            <nav>
                <ul className={css.navList}>
                    <li><NavLink to="/" className={css.link}>Home</NavLink></li>
                    <li><NavLink to="/teachers" className={css.link}>Teachers</NavLink></li>
                    
                </ul>
                </nav>
            < AuthNav/>

        </header>
    )
}
export default Header;