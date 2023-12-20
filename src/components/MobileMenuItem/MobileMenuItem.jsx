import React from 'react';
import { Container, Item, Line, StyledLink } from './MobileMenuItem.styled';

export const MobileMenuItem = ({ delay, to, name, handleClick }) => {
  return (
    <Item delay={delay} onClick={handleClick}>
      <Container delay={delay}>
        <StyledLink to={to}>{name}</StyledLink>
      </Container>
      <Line />
    </Item>
  );
};
