import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DiRuby } from 'react-icons/di';
import {
  Indicator,
  Item,
  List,
  Navigation,
  StyledHeader,
  StyledLink,
  Text,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navigation>
          <List>
            <Item>
              <StyledLink to="/">
                <DiRuby />
                <Text>Home</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/pocemons">
                <DiRuby />
                <Text>Pocemons</Text>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/heroes">
                <DiRuby />
                <Text>Heroes</Text>
              </StyledLink>
            </Item>

            <Item>
              <StyledLink to="/movies">
                <DiRuby />
                <Text>Movies</Text>
              </StyledLink>
            </Item>
            <Indicator />
          </List>
        </Navigation>
      </StyledHeader>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
