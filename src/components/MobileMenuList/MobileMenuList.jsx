import React from 'react';
import { Container } from './MobileMenuList.styled';
import { MobileMenuItem } from 'components/MobileMenuItem/MobileMenuItem';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selector';

const privateRoutes = [
  { name: 'Home', to: '/' },
  { name: 'Pocemons', to: '/pocemons' },
  { name: 'Heroes', to: '/heroes' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Movies', to: '/movies' },
  { name: 'Favorite', to: '/favorite' },
  { name: 'Phonebook', to: '/contacts' },
  { name: 'Calendar', to: '/calendar' },
];
const publickRoutes = [
  { name: 'Home', to: '/' },
  { name: 'Register', to: '/register' },
  { name: 'Log In', to: '/login' },
];

export const MobileMenuList = ({ open, handleClick }) => {
  const isLoggedIn = useSelector(selectIsLogin);
  const routes = isLoggedIn ? privateRoutes : publickRoutes;
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
