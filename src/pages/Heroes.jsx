import { Button, Loader } from 'components';
import { Error } from 'components/Error/Error';
import { HeroList } from 'components/Heroes/HeroList/HeroList';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { useEffect, useState } from 'react';
import { getHero } from 'services/heroApi';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHero(page)
      .then(data => {
        setHeroes(prevState => {
          const heroesId = prevState.map(hero => hero.id);
          const newHeroes = data.filter(hero => !heroesId.includes(hero.id));
          if (newHeroes.length > 0) {
            setIsLoadMore(true);
            setIsLoading(false);
          }

          return [...prevState, ...newHeroes];
        });
      })
      .catch(() => setError(true));
  }, [page]);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {error ? <Error /> : <HeroList heroes={heroes} />}

      {isLoadMore && (
        <Button type="button" onClick={onClickLoadMore}>
          Loadmore...
        </Button>
      )}
      <ScrollToTop />
      {isLoading && <Loader />}
    </>
  );
};

export default Heroes;
