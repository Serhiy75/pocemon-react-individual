import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { GiNinjaHeroicStance, GiAnimalHide } from 'react-icons/gi';
import { TfiGallery } from 'react-icons/tfi';

import {
  Indicator,
  Item,
  List,
  Navigation,
  StyledHeader,
  StyledLink,
  Text,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selector';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <>
      <StyledHeader>
        <Navigation>
          <List>
            <Item>
              <StyledLink to="/">
                <HiOutlineHomeModern />
                <Text>Home</Text>
              </StyledLink>
            </Item>
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
            <Indicator className="indicator" />
          </List>
        </Navigation>
        {isLoggedIn && <UserMenu />}
      </StyledHeader>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
