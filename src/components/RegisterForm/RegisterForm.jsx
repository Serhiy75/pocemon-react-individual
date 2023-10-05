import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.elements.password.value !== form.elements.confirmPassword.value)
      return;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div className={css.register}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.labeltitle}>Registration</h2>
        <div className={css.label}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={css.input}
            autoComplete="off"
          />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className={css.input}
            autoComplete="off"
          />
        </div>
        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
      <Link to="/login">log in</Link>
    </div>
  );
};
