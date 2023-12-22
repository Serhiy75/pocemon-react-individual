import React from 'react';
import {
  Indicator,
  Item,
  List,
  Navigation,
  StyledLink,
  Text,
} from './DesktopMenu.styled';
import { BiCameraMovie } from 'react-icons/bi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { GiNinjaHeroicStance, GiAnimalHide } from 'react-icons/gi';
import { TfiGallery } from 'react-icons/tfi';
import { MdContactPhone, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selector';

export const DesktopMenu = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  return (
    <Navigation>
      <List>
        <Item>
          <StyledLink to="/">
            <HiOutlineHomeModern />
            <Text>Home</Text>
          </StyledLink>
        </Item>
        {!isLoggedIn ? (
          <>
            {' '}
            <Item>
              <StyledLink to="/register">
                <HiOutlineHomeModern />
                <Text>Register</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/login">
                <HiOutlineHomeModern />
                <Text>Login</Text>
              </StyledLink>
            </Item>
          </>
        ) : (
          <>
            <Item>
              <StyledLink to="/pocemons">
                <GiAnimalHide />
                <Text>Pocemons</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/heroes">
                <GiNinjaHeroicStance />
                <Text>Heroes</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/gallery">
                <TfiGallery />

                <Text>Gallery</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/movies">
                <BiCameraMovie />
                <Text>Movies</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/favorite">
                <MdOutlineFavoriteBorder />
                <Text>favorite</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/contacts">
                <MdContactPhone />
                <Text>Phonebook</Text>
              </StyledLink>
            </Item>
          </>
        )}

        <Indicator className="indicator" />
      </List>
    </Navigation>
  );
};
