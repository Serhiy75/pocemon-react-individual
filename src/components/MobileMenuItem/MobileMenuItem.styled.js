import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

const slideIn = keyframes` 0% {
    transform: translateX(-2%);
  }
  100% {
    transform: translateX(0);
  }`;

const shrink = `  0% {
    width: 95%;
  }
  100% {
    width: 90%;
  }`;

export const Item = styled.li`
  opacity: 0;
  animation: 1s ${appear} forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const Container = styled.div`
  transition: color 0.2s ease-in-out;
  animation: 0.5s ${slideIn} forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  padding: 16px 0;
  display: block;
  color: white;
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: grey;
  animation: 0.5s ${shrink} forwards;
  animation-delay: ${({ delay }) => delay};
`;
