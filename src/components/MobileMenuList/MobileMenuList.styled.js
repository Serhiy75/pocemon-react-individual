import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ open }) => (open ? '100%' : 0)};
  width: 100vw;
  display: flex;
  flex-direction: column;
  opacity: 0.95;
  color: white;
  transition: height 0.3s ease;
`;
