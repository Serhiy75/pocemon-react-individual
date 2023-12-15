import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login } from 'redux/auth/operation';
import { usePasswordToggle } from 'helpers/usePasswordToggle';
import Notiflix from 'notiflix';
import {
  Button,
  ErrorBox,
  FieldBox,
  FieldInput,
  FormContainer,
  FormLink,
  Title,
  WrapperForm,
} from 'components/RegisterForm/RegisterForm.styled';
import { Formik } from 'formik';
import { TogglePasswordIcon } from 'components/TogglePasswordVisibility/TogglePasswordVisibility';

const validationSchema = yup.object().shape({
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
    .required('password is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
  ]);
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(login(values))
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
    <WrapperForm>
      <Title>Log In</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <FormContainer>
              <FieldBox>
                <FieldInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorBox name="email" component="div" />
              </FieldBox>
              <FieldBox>
                <FieldInput
                  name="password"
                  type={showPasswords.password1 ? 'text' : 'password'}
                  placeholder="Enter your password"
                />
                <ErrorBox name="password" component="div" />
                <TogglePasswordIcon
                  showPassword={showPasswords.password1}
                  onToggle={() => togglePasswordVisibility('password1')}
                />
              </FieldBox>
              <Button type="submit">Log In</Button>
            </FormContainer>
          );
        }}
      </Formik>
      <FormLink to="/register">Register</FormLink>
    </WrapperForm>
  );
};
