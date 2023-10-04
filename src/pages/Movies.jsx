import { Section } from 'components/Section/Section';
import { lazy } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TrendingMovies = lazy(() => import('pages/TrendingMovies'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));

const Movies = () => {
  return (
    <Section>
      <Tabs>
        <TabList>
          <Tab>Trending Movies</Tab>
          <Tab>Search Movies</Tab>
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
