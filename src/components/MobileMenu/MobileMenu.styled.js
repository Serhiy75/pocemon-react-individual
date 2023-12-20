import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  background-color: black;
  height: ${({ open }) => (open ? '100vh' : '35px')};
  top: 40px;
  left: 40px;
  z-index: 2;
`;
