import { NotFound } from 'components/NotFound/NotFound';
import { PocemonList } from 'components/Pocemon/PocemonLIst/PocemonList';
import { useSelector } from 'react-redux';
import { selectFavoritePocemons } from 'redux/favorite/selector';

const Favorite = () => {
  const favoritePocemon = useSelector(selectFavoritePocemons);
  return (
    <div>
      {favoritePocemon.length !== 0 ? (
        <PocemonList pocemons={favoritePocemon} />
      ) : (
        <NotFound title={'No favorite pocemons'} />
      )}
    </div>
  );
};

export default Favorite;
