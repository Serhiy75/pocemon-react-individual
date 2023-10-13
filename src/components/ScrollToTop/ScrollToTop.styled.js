import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  & svg {
    transform: rotate(220deg);
    color: green;
    width: 40px;
    height: 40px;
  }
`;
