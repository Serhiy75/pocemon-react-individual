import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  padding: 40px;
  /* background-color: #ffc700; */
`;

export const Navigation = styled.nav`
  display: inline-flex;
  padding: 0 25px;
  height: 70px;
  background-color: #cee8e5;
  position: relative;
  margin: 0 auto;
  border-radius: 50px;
`;

export const List = styled.ul`
  display: flex;
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

  &:nth-child(1):has(.active) ~ div {
    transform: translateX(calc(70px * 0));
  }
  &:nth-child(2):has(.active) ~ div {
    transform: translateX(calc(70px * 1));
  }
  &:nth-child(3):has(.active) ~ div {
    transform: translateX(calc(70px * 2));
  }
  &:nth-child(4):has(.active) ~ div {
    transform: translateX(calc(70px * 3));
  }
  &:nth-child(5):has(.active) ~ div {
    transform: translateX(calc(70px * 4));
  }
  &:nth-child(6):has(.active) ~ div {
    transform: translateX(calc(70px * 5));
  }
  &:nth-child(7):has(.active) ~ div {
    transform: translateX(calc(70px * 6));
  }
  &:nth-child(8):has(.active) ~ div {
    transform: translateX(calc(70px * 7));
  }
  &:nth-child(9):has(.active) ~ div {
    transform: translateX(calc(70px * 8));
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  color: #64864a;
  & svg {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
  }
  &.active {
    color: #f56093;
  }
  &:hover svg,
  &:focus svg,
  &.active svg {
    transform: translateY(-35px);
  }
  &:hover span,
  &:focus span,
  &.active span {
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
export const Indicator = styled.div`
  background-color: #feddcb;
  width: 70px;
  height: 70px;
  position: absolute;
  top: -50%;
  border-radius: 50%;
  border: 6px solid #ffc700;
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    top: 46%;
    left: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 #ffc700;
  }
  &::after {
    content: '';
    position: absolute;
    top: 46%;
    right: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 #ffc700;
  }
`;
export const SwitchBox = styled.div``;

// ${({ active }) => active}
