import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;
