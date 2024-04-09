import css from './card-item.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/teachers/teachers-selectors';
import sprite from '../../img/symbol-defs.svg';
import LevelButton from '../LevelButton/LevelButton';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/teachers/teachers-slice';
import Details from '../Details/Details';
import BookBtn from '../BookBtn/BookBtn';
import Modal from '../Modal/Modal';
import FormBooking from '../FormBooking/FormBooking';

import toast from 'react-hot-toast';

import { selectIsAuth } from '../../redux/auth/auth-selectors';

const CardItem = ({ teacher }) => {
  const [expanded, setExpanded] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isAuth = useSelector(selectIsAuth);
  const isFavorite = favorites.some(item => item.id === teacher.id);
  const {
    id,
    avatar_url,
    lessons_done,
    rating,
    languages,
    price_per_hour,
    name,
    lesson_info,
    conditions,
    levels,
  } = teacher;

  const speaks = languages ? languages.join(', ') : '';

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteToggle = () => {
    if (!isAuth) {
      toast.success('This action is available only for authenticated users.', {
        position: 'top-center',
      });
      return;
    }
    if (isAuth && isFavorite) {
      dispatch(removeFromFavorites(teacher));
    } else {
      dispatch(addToFavorites(teacher));
    }
  };
  const openBookModal = () => setShowBookModal(true);
  const closeBookModal = () => setShowBookModal(false);

  return (
    <li className={css.cardWrap}>
     
      <div className={css.imgWrapper}>
        <img src={avatar_url} alt="avatar" className={css.avatarImg} />
        <div className={css.circle}></div>
      </div>
      <div className={css.wrapper}>
        <div className={css.contentWrap}>
        
          <p className={css.text}>Languages</p>
          <div className={css.topBlock}>
            <div className={css.iconWrap}>
              <svg className={css.bookOpenIcon}>
                <use href={`${sprite}#icon-book-open`}></use>
              </svg>
              <p className={css.topText}>Lessons online</p>
            </div>
            <p className={css.topText}>Lessons done: {lessons_done} </p>
            <div className={css.iconWrap}>
              <svg className={css.starIcon}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              <p className={css.topText}>Rating: {rating}</p>
            </div>
            <p className={css.topText}>
              Price / 1 hour:{' '}
              <span className={css.priceText}>{price_per_hour}$</span>
            </p>
          </div>
        
          <button
            type="button"
            className={css.iconHeartBtn}
            onClick={handleFavoriteToggle}
          >
            <svg
              className={`${css.heartIcon} ${isFavorite ? css.favorite : ''}`}
            >
              <use href={`${sprite}#icon-heart1`}></use>
            </svg>
          </button>
        </div>
        
        <div className={css.columnWrapper}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.benefitsWrap}>
            <ul className={css.benefitsList}>
              <li>
                <p className={css.benefitsText}>
                  Speaks: <span className={css.infoDecorText}>{speaks}</span>
                </p>
              </li>
              <li>
                <p className={css.benefitsText}>
                  Lesson Info:{' '}
                  <span className={css.infoText}>{lesson_info}</span>
                </p>
              </li>
              <li>
                <p className={css.benefitsText}>
                  Conditions: <span className={css.infoText}>{conditions}</span>
                </p>
              </li>
            </ul>
            <button
              type="button"
              className={css.moreBtn}
              onClick={handleReadMoreClick}
            >
              {expanded ? 'Hide details' : 'Read more'}
            </button>
          </div>
          {expanded && <Details teacher={teacher} />}
          <ul className={css.buttonList}>
            {levels &&
              levels.map(level => (
                <li key={level}>
                  <LevelButton text={`#${level}`} />
                </li>
              ))}
          </ul>
          {expanded && <BookBtn onClick={openBookModal} />}
          {expanded && showBookModal && (
            <Modal close={closeBookModal}>
              <FormBooking teaherPhoto={avatar_url} name={name} id={id} />
            </Modal>
          )}
        </div>
      </div>
    </li>
  );
};
export default CardItem;
