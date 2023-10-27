import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;
