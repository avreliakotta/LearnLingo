import css from "./card-item.module.css";
// import {selectTeachers} from "../../redux/teachers/teachers-selectors";
import sprite from "../../img/symbol-defs.svg";

const CardItem=()=>{
    return(
        <div className={css.cardWrap}>
        <div className={css.imgWrapper}>
            <img  alt="avatar"className={css.avatarImg}/>
        </div>
        <div>
            <p className={css.text}>Languages</p>
            <div className={css.topBlock}>
            <div className={css.iconWrap}>
                <src className={css.bookOpenIcon}>
                    <use href={`${sprite}#icon-book-open`}></use>
                </src>
                <p>Lessons online</p>
            </div>
            <p>Lessons done: </p>
            <div>
                <svg className={css.starIcon}>
                    <use href={`${sprite}#`}></use>
                </svg>
                <p>Rating:</p>
            </div>
            <p>Price / 1 hour: </p>
            </div>
        <button type="button" className={css.iconHeartBtn}>
            <svg className={css.heartIcon}>
                <use href={`${sprite}#icon-heart1`}></use>
            </svg>
        </button>
        </div>
        </div>

    )
}
export default CardItem;