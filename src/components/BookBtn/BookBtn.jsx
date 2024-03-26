import css from "./book-btn.module.css";
const BookBtn=({ onClick})=>{
    return(
        <button type="button" onClick={onClick} className={css.bookBtn}>Book trial lesson</button>
    )
}
export default BookBtn;