import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { TogglePasswordIcon } from 'components/TogglePasswordVisibility/TogglePasswordVisibility';
import { usePasswordToggle } from 'helpers/usePasswordToggle';
import {
  Button,
  ErrorBox,
  FieldBox,
  FieldInput,
  FormContainer,
  FormLink,
  Title,
  WrapperForm,
} from './RegisterForm.styled';

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

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }))
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
      <Title>Registration</Title>
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
        {() => {
          return (
            <FormContainer>
              <FieldBox>
                <FieldInput
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <ErrorBox name="name" component="div" />
              </FieldBox>
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
              <FieldBox>
                <FieldInput
                  type={showPasswords.password2 ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="confirm password"
                />
                <ErrorBox name="confirmPassword" component="div" />
                <TogglePasswordIcon
                  showPassword={showPasswords.password2}
                  onToggle={() => togglePasswordVisibility('password2')}
                />
              </FieldBox>
              <Button type="submit">Register</Button>
            </FormContainer>
          );
        }}
      </Formik>
      <FormLink to="/login">log in</FormLink>
    </WrapperForm>
  );
};
