import { Formik, Form, Field, ErrorMessage } from 'formik';

import css from './form-booking.module.css';
import RadioButton from '../RadioButton/RadioButton';
import { radioOptions } from './radio-options';
import { bookSchema } from '../../shemas/book-schema';
import toast from 'react-hot-toast';

import { getDatabase, ref, push } from 'firebase/database';
import app from '../../firebase/firebase';

const FormBooking = ({ teacherPhoto, name, id, closeModal }) => {
  console.log('Starting handleSubmit...');
  const initialValues = {
    course: '',
    email: '',

    phone: '',
    name: '',
  };

  const database = getDatabase(app);
  const bookingsRef = ref(database, 'bookings');

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const bookingData = {
        ...values,
        teacherId: id,
      };
      console.log('bookingData before push:', bookingData);

      await push(bookingsRef,bookingData  );
      console.log('Booking successful!');
      setTimeout(() => {
        toast.success('Book successful!', { position: 'top-center' });
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
        closeModal();
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Book failed. Please, try again.', {
        position: 'top-center',
      });
    }
    setSubmitting(false);
  };

  return (
    <>
      <h2 className={css.bokingTitle}>Book trial lesson</h2>
      <p className={css.textBooking}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.imgWrap}>
        <img src={teacherPhoto} alt="teacher" className={css.teaherAvatar} />
        <div className={css.contentWrap}>
          <p className={css.textContent}>Your teacher</p>
          <h3>{name}</h3>
        </div>
      </div>
      <p className={css.text}>What is your main reason for learning English?</p>
      <Formik
        initialValues={initialValues}
        validationSchema={bookSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, setFieldValue, values }) => (
          <Form className={css.bookingForm}>
            <div className={css.radioBtnWrap}>
              {radioOptions.map(option => (
                <RadioButton
                  name="course"
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  onChange={() => setFieldValue('course', option.value)}
                />
              ))}
            </div>
            <div className={css.inputWrap}>
              <div>
                <Field
                  type="text"
                  name="name"
                  // onChange={handleChange}
                  value={values.name || ""}
                  placeholder="Full Name"
                  className={`${css.input} ${
                    errors.name && touched.name ? css.error : ''
                  }
      ${touched.name && !errors.name ? css.success : ''}`}
                  autoComplete="new-name"
                  required
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={css.textError}
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  className={`${css.input} ${
                    errors.email && touched.email ? css.error : ''
                  }
      ${touched.email && !errors.email ? css.success : ''}`}
                  autoComplete="new-email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.textError}
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="phone"
                  value={values.phone}
                  className={`${css.input} ${
                    errors.phone && touched.phone ? css.error : ''
                  }
      ${touched.phone && !errors.phone ? css.success : ''}`}
                  autoComplete="new-phone"
                  required
                  placeholder="Phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.textError}
                />
              </div>
            </div>
            <button
              type="submit"
              className={css.submitBtn}
              disabled={isSubmitting}
            >
              Book
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormBooking;
