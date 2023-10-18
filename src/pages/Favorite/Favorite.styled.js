import styled from 'styled-components';

export const DeleteButton = styled.button`
  display: flex;
  text-align: center;
  color: #fff;
  border: 0;
  margin: 10px 10px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: orchid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 320px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: #3470ff;
    color: yellow;
  }
  &:hover {
    scale: 1.1;
    color: red;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
