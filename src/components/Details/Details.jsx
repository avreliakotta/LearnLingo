import css from './details.module.css';
import sprite from '../../img/symbol-defs.svg';

const Details = ({ teacher }) => {
  const { experience, reviews } = teacher;

  return (
    <div>
      <p className={css.experienceText}>{experience}</p>
      <ul className={css.detailsList}>
        {reviews &&
          reviews.map(rewiew => (
            <li key={rewiew.reviewer_name}>
              <div className={css.contentWrap}>
                <h3 className={css.subTitle}>{rewiew.reviewer_name}</h3>
                <div className={css.iconWrap}>
                  <svg className={css.starIcon}>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  <p className={css.text}>{rewiew.reviewer_rating}</p>
                </div>
              </div>
              <p className={css.commentText}>{rewiew.comment}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Details;
