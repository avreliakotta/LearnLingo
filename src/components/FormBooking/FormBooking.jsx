// import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './form-booking.module.css';
const FormBooking = ({ teaherPhoto, name }) => {
    // const initialValues = {
    //     email: '',
    //     password: '',
    //     phone:""
    //   };
  return (
   
    <>
      <h2 className={css.bokingTitle}>Book trial lesson</h2>
      <p className={css.textBooking}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.imgWrap}>
        <img src={teaherPhoto} alt="teacher" className={css.teaherAvatar} />
        <div className={css.contentWrap}>
          <p className={css.textContent}>Your teacher</p>
          <h3>{name}</h3>
        </div>
      </div>
      <p className={css.text}>What is your main reason for learning English?</p>
      <form className={css.bookingForm}>
        <div className={css.radioBtnWrap}>
          <label className={css.label}>
            <input
              type="radio"
              name="course"
              value="Career and business"
              className={css.radioBtn}
            />
            Career and business
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="course"
              value="Lesson for kids"
              className={css.radioBtn}
            />
            Lesson for kids
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="course"
              value="Living abroad"
              className={css.radioBtn}
            />
            Living abroad
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="course"
              value="Exams and coursework"
              className={css.radioBtn}
            />
            Exams and coursework
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="course"
              value="Culture, travel or hobby"
              className={css.radioBtn}
            />
            Culture, travel or hobby
          </label>
        </div>
        <div className={css.inputWrap}>
          <input
            type="text"
            name="name"
            className={css.input}
            placeholder="Full Name"
            autoComplete='off'
          />
          <input
            type="email"
            name="email"
            className={css.input}
            placeholder="Email"
            autoComplete='off'
          />
          <input
            type="text"
            name="phone"
            className={css.input}
            placeholder="Phone number"
            autoComplete='off'
          />
        </div>
        <button type="submit" className={css.submitBtn}>Book</button>
      </form>
    </>
  );
};
export default FormBooking;
