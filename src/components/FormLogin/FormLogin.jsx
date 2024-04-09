import css from "./form-login.module.css";
import { useDispatch } from 'react-redux';
import sprite from "../../img/symbol-defs.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logInSchema } from "../../shemas/auth-schemas";
import {login} from "../../redux/auth/auth-operations";
import toast from 'react-hot-toast';
const FormLogin=({closeModal})=>{
  const dispatch=useDispatch();
    const initialValues = {
        email: "",
        password:"",
        
      };
      const handleSubmit = async (
        values,
        { setSubmitting, resetForm, setError }
      ) => {
        
        try{
          await dispatch(login(values));
        
        setTimeout(() => {
          toast.success('Login successful!', { position: 'top-center' });
         
          setSubmitting(false);
          resetForm();
          closeModal();
        }, 1000); 
        
        } catch (error) {
          toast.error('Login failed. Please, try again.', {
            position: 'top-center'})
          
          }
          setSubmitting(false);
        }
    return(
        <>
        <h1 className={css.title}>Log In</h1>
        <p className={css.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
        <Formik 
         initialValues={initialValues}
         validationSchema={logInSchema}
         onSubmit={handleSubmit}
        >
             {({ errors, touched }) => (
            <Form className={css.loginForm}>
            <div className={css.inputsWrapper}>
           <div>
            <Field 
            type="email"
             name="email"
            placeholder="Email"
            className={`${css.authInput} ${
                errors.email && touched.email ? css.error : ''
              }
        ${touched.email && !errors.email ? css.success : ''}`}
            autoComplete="new-email"
            required/>
             <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="email"
                    />
                    </div>
            <div className={css.inputWrapper}>
            
            <Field
  type="password" 
  name="password"
  placeholder="Password"
  className={`${css.authInput} ${
    errors.password && touched.password ? css.error : ''
  }
  ${touched.password && !errors.password ? css.success : ''}`}
  autoComplete="new-password" 
  required/>

            <svg className={css.icon}>
                <use href={`${sprite}#icon-eye-off`}></use>
            </svg>
            <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="password"
                    />
            </div>
            </div>
            <button type="submit" className={css.submitBtn}>Log In</button>
            </Form>
             )}
        </Formik>
        </>        

    )
}
export default FormLogin;
