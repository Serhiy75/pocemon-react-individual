import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/pocemons">Pocemons</NavLink>
            </li>
            <li>
              <NavLink to="/heroes">Heroes</NavLink>
            </li>
            <li>
              <NavLink to="/trending_movies">Trending Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
