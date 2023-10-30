import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operation';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'the name must containe min two leters')
    .required('name is required')
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'pleas enter valid name, only leters'
    ),
  email: yup
    .string()
    .email('email is not valid')
    .min(6, 'the email must containe min six leters')
    .required('email is required')
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      'email is not valid'
    ),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values.password !== values.confirmPassword) {
      Notiflix.Notify.failure(' перевірте пароль!');
      return;
    }

    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm();
        Notiflix.Notify.success('success');
      })
      .catch(() => {
        Notiflix.Notify.failure('error');
      });
  };

  return (
    <div className={css.register}>
      <h2 className={css.labeltitle}>Registration</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.label}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" className={css.error} component="div" />
          </div>
          <div className={css.label}>
            <Field
              className={css.input}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" className={css.error} component="div" />
          </div>
          <div className={css.label}>
            <Field
              className={css.input}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              className={css.error}
              component="div"
            />
          </div>
          <div className={css.label}>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              className={css.input}
            />
            <ErrorMessage
              name="confirmPassword"
              className={css.error}
              component="div"
            />
          </div>
          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
      <Link to="/login">log in</Link>
    </div>
  );
};
