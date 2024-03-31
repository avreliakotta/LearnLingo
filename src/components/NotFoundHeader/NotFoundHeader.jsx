import css from './not-found-header.module.css';
import { NavLink } from 'react-router-dom';
import sprite from '../../img/symbol-defs.svg';
const NotFoundHeader = () => {
  return (
    <header className={css.headerSection}>
      <NavLink to="/">
        <div className={css.logoWrap}>
          <p className={css.logoText}>LearnLingo</p>
        </div>
      </NavLink>

      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/teachers" className={css.link}>
              Teachers
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.authWrapper}>
        <div className={css.loginWrapper}>
          <button type="button" className={css.loginBtn}>
            <svg className={css.loginIcon}>
              <use href={`${sprite}#icon-log-in`}></use>
            </svg>
            Log in
          </button>
        </div>
        <button type="button" className={css.registrationBtn}>
          Registration
        </button>
      </div>
    </header>
  );
};
export default NotFoundHeader;
