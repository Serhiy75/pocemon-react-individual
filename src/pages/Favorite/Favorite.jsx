import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HeroList } from 'components/Heroes/HeroList/HeroList';
import { NotFound } from 'components/NotFound/NotFound';
import { PocemonList } from 'components/Pocemon/PocemonLIst/PocemonList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteHeroes,
  selectFavoritePocemons,
} from 'redux/favorite/selector';
import { DeleteButton } from './Favorite.styled';
import {
  deleteAllHeroes,
  deleteAllPocemons,
} from 'redux/favorite/favoriteSlice';

const Favorite = () => {
  const dispatch = useDispatch();

  const favoritePocemon = useSelector(selectFavoritePocemons);
  const favoriteHero = useSelector(selectFavoriteHeroes);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Pocemons</Tab>
          <Tab>Heroes</Tab>
        </TabList>
        <TabPanel>
          {favoritePocemon.length !== 0 ? (
            <>
              <DeleteButton onClick={() => dispatch(deleteAllPocemons())}>
                delete all pocemons
              </DeleteButton>
              <PocemonList pocemons={favoritePocemon} />
            </>
          ) : (
            <NotFound title={'No favorite pocemons'} />
          )}
        </TabPanel>
        <TabPanel>
          {favoriteHero.length !== 0 ? (
            <>
              <DeleteButton onClick={() => dispatch(deleteAllHeroes())}>
                delete all heroes
              </DeleteButton>
              <HeroList heroes={favoriteHero} />
            </>
          ) : (
            <NotFound title={'No favorite heroes'} />
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Favorite;
