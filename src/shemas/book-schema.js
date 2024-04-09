import * as Yup from 'yup';
export const bookSchema = Yup.object({
    course: Yup.string().required('Please select a course'),
    name: Yup.string().required('Please enter your full name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    phone: Yup.string().required('Please enter your phone number')
});