import { NavLink } from 'react-router-dom';

import sprite from '../../img/symbol-defs.svg';
import css from './header.module.css';
import AuthNav from '../AuthNav/AuthNav';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';

import { logoutUser } from '../../redux/auth/auth-slice';
import { selectIsAuth } from '../../redux/auth/auth-selectors';


const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(logoutUser());
  };
  const handleMobileMenuToggle = () => {
    setIsOpen(prev => !prev);
   
  };

  return (
    <>
      <header className={css.headerSection}>
        <NavLink to="/">
          <div className={css.logoWrap}>
            <svg className={css.logoIcon}>
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
            <p className={css.logoText}>LearnLingo</p>
          </div>
        </NavLink>
   <div className={isOpen ? [css.menu,css.isOpen].join(" ") : [css.menu]}>
        <nav className={css.headerNav}>
         
          <ul className={`${css.navList} ${isOpen ? css.isOpen : ''}`}>
        <li>
          <NavLink to="/"  className={css.link} onClick={handleMobileMenuToggle } >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachers"  className={css.link} onClick={handleMobileMenuToggle } >
            Teachers
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to="/favorites" className={css.link} onClick={handleMobileMenuToggle }>
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
        </nav>
        <div>
        {isAuth ? <LogOutBtn onClick={handlerLogout} /> : <AuthNav/>}
        {isOpen &&<button type="button" className={css.closeBtn} onClick={handleMobileMenuToggle }>
          <svg className={css.closeIcon}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>}
        </div>
        </div>
        <div className={css.burgerWrapper}>
        {!isOpen && <button
            type="button"
            className={css.burgerBtn}
            onClick={handleMobileMenuToggle}
          >
           <svg className={css.burgerIcon}>
           
              <use href={`${sprite}#icon-burger`}></use>
            </svg>
          </button>}
        </div>
        
      
      </header>
    </>
  );
};
export default Header;
