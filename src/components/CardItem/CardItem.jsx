import css from './card-item.module.css';

import sprite from '../../img/symbol-defs.svg';
import LevelButton from '../LevelButton/LevelButton';


const CardItem = ({teacher}) => {
  const speaks= teacher.languages.join(", ")
    
  return (
    <div className={css.cardWrap}>
      <div className={css.imgWrapper}>
        <img src={teacher.avatar_url} alt="avatar" className={css.avatarImg} />
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
            <p className={css.topText}>Lessons done: {teacher.lessons_done} </p>
            <div className={css.iconWrap}>
              <svg className={css.starIcon}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              <p className={css.topText}>Rating: {teacher.rating}</p>
            </div>
            <p className={css.topText}>
              Price / 1 hour: <span className={css.priceText}>{teacher.price_per_hour}$
</span>
            </p>
          </div>
          <button type="button" className={css.iconHeartBtn}>
            <svg className={css.heartIcon}>
              <use href={`${sprite}#icon-heart1`}></use>
            </svg>
          </button>
        </div>
        <div className={css.columnWrapper}>
          <h2 className={css.title}>{teacher.name}</h2>
          <div className={css.benefitsWrap}>
            <ul className={css.benefitsList}>
              <li>
                <p className={css.benefitsText}>
                  Speaks: <span className={css.infoDecorText}>{speaks}</span>
                </p>
              </li>
              <li>
                <p className={css.benefitsText}>Lesson Info: <span className={css.infoText}>{teacher.lesson_info}

</span></p>
              </li>
              <li>
                <p className={css.benefitsText}>
                  Conditions: <span className={css.infoText}>{teacher.conditions}</span>
                </p>
              </li>
            </ul>
            <button type="button" className={css.moreBtn}>
              Read more
            </button>
          </div>
          <ul className={css.buttonList}>
            <li>
              <LevelButton text="#A1 Beginner" />
            </li>
            <li>
              <LevelButton text="#A2 Elementary" />
            </li>
            <li>
              <LevelButton text="#B1 Intermediate" />
            </li>
            <li>
              <LevelButton text="#B2 Upper-Intermediate" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
