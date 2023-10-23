import { Button, Loader } from 'components';
import { Error } from 'components/Error/Error';
import { PocemonList } from 'components/Pocemon/PocemonLIst/PocemonList';
import { useEffect, useState } from 'react';

import { getPokemons } from 'services/pocemonApi';

const Pocemons = () => {
  const [pocemons, setPocemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons(offset)
      .then(data => {
        console.log(data);
        setPocemons(prevState => [...prevState, ...data]);
        setIsLoadMore(true);
        // setPocemons(prevState => {
        //   const pocemonsId = prevState.map(pocemon => pocemon.id);
        //   const newPocemons = data.filter(
        //     pocemon => !pocemonsId.includes(pocemon.id)
        //   );

        //   if (newPocemons.length > 0) {
        //     setIsLoadMore(true);
        //   }

        //   return [...prevState, ...newPocemons];
        // });
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [offset]);
  const onClickLoadMore = () => {
    setOffset(prevState => prevState + 20);
  };

  return (
    <>
      <div>{error ? <Error /> : <PocemonList pocemons={pocemons} />}</div>
      {isLoading && <Loader />}
      {isLoadMore && pocemons.length < 1292 && (
        <Button type="button" onClick={onClickLoadMore}>
          Loadmore...
        </Button>
      )}
    </>
  );
};

export default Pocemons;
