import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operation';
import { Field, Formik, Form } from 'formik';
import Notiflix from 'notiflix';

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
      >
        <Form className={css.form}>
          <div className={css.label}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={css.label}>
            <Field
              className={css.input}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={css.label}>
            <Field
              className={css.input}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className={css.label}>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              className={css.input}
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
