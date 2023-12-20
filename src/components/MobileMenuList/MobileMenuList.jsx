import React from 'react';
import { Container } from './MobileMenuList.styled';
import { MobileMenuItem } from 'components/MobileMenuItem/MobileMenuItem';

const routes = [
  { name: 'Home', to: '/' },
  { name: 'Pocemons', to: '/pocemons' },
  { name: 'Heroes', to: '/heroes' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Movies', to: '/movies' },
  { name: 'Favorite', to: '/favorite' },
  { name: 'Phonebook', to: '/contacts' },
];

export const MobileMenuList = ({ open, handleClick }) => {
  return (
    <Container open={open}>
      <ul>
        {routes.map(({ name, to }, index) => (
          <MobileMenuItem
            key={name}
            to={to}
            name={name}
            handleClick={handleClick}
            delay={`${index * 0.1}s`}
          />
        ))}
      </ul>
    </Container>
  );
};
