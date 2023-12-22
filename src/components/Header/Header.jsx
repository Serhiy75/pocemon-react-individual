import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selector';
import { UserMenu } from 'components/UserMenu/UserMenu';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';
import { DesktopMenu } from 'components/DesktopMenu/DesktopMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <>
      <StyledHeader>
        <MediaQuery device="default">
          <MobileMenu />
        </MediaQuery>
        <MediaQuery device="desktop">
          <DesktopMenu />
        </MediaQuery>
        {isLoggedIn && <UserMenu />}
      </StyledHeader>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
