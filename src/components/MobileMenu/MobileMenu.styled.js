import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  background-color: black;
  width: ${({ open }) => (open ? '85%' : '35px')};
  height: ${({ open }) => (open ? '100vh' : '35px')};
  top: 40px;
  left: ${({ open }) => (open ? '50%' : '40px')};
  transform: translateX(${({ open }) => (open ? '-50%' : '0')});
  z-index: 2;
  padding: ${({ open }) => (open ? '10px' : '0')};
`;
