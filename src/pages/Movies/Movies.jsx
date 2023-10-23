import { Section } from 'components/Section/Section';
import { lazy } from 'react';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabStyled } from './Movies.styled';

const TrendingMovies = lazy(() => import('pages/TrendingMovies'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));

const Movies = () => {
  return (
    <Section>
      <Tabs>
        <TabList>
          <TabStyled>Trending Movies</TabStyled>
          <TabStyled>Search Movies</TabStyled>
        </TabList>
        <TabPanel>
          <TrendingMovies />
        </TabPanel>
        <TabPanel>
          <SearchMovies />
        </TabPanel>
      </Tabs>
    </Section>
  );
};

export default Movies;
