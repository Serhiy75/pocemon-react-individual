import { HeroList } from 'components/HeroList/HeroList';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { useEffect, useState } from 'react';
import { getHero } from 'services/heroApi';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // if (heroes.length) return;
    getHero(page).then(data => {
      setHeroes(prevState => {
        const heroesId = prevState.map(hero => hero.id);
        const newHeroes = data.filter(hero => !heroesId.includes(hero.id));
        return [...prevState, ...newHeroes];
      });
    });
  }, [page]);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <HeroList heroes={heroes} />
      <button type="button" onClick={onClickLoadMore}>
        Loadmore...
      </button>
      <ScrollToTop />
    </div>
  );
};

export default Heroes;
