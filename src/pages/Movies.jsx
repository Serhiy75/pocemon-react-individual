import { lazy } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import SearchMovies from './SearchMovies';
// import TrendingMovies from 'pages/TrendingMovies';

const TrendingMovies = lazy(() => import('pages/TrendingMovies'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));

const Movies = () => {
  return (
    <>
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
    </>
  );
};

export default Movies;
