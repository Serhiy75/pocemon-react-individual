import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  width: 300px;
  height: 70px;
  background-color: lightgreen;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 70px;
  height: 70px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  & svg {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
  }
  &:hover svg {
    transform: translateY(-35px);
  }
  &:hover span {
    opacity: 1;
    transform: translateY(10px);
  }
`;

export const Text = styled.span`
  position: absolute;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;
