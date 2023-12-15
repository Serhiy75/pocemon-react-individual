import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-width: 380px;

  padding: 50px 20px;
  margin: 130px auto 0;
  /* background: rgb(121, 6, 167); */
  background: linear-gradient(
    90deg,
    rgba(121, 6, 167, 1) 3%,
    rgba(9, 9, 121, 1) 35%,
    rgba(6, 84, 82, 1) 100%
  );
`;

export const Title = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #d9d9d9;
`;
export const FormContainer = styled(Form)`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldBox = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
  margin-top: 30px;
`;

export const FieldInput = styled(Field)`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: #7d2ae8;
  }
`;

export const ErrorBox = styled(ErrorMessage)`
  color: red;
  font-weight: 500;
`;

export const PasswordIconLook = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  right: 4%;
  top: 31%;
  & svg {
    color: rgba(255, 255, 255, 0.54);
    cursor: pointer;
  }
`;
export const Button = styled.button`
  width: 100px;
  padding: 6px 18px;
  border: none;
  border-radius: 10px;
  background-color: #7d2ae8;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #370c6f;
  }
`;

export const FormLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 6px 18px;
  border: none;
  border-radius: 10px;
  background-color: #7d2ae8;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #370c6f;
  }
`;
