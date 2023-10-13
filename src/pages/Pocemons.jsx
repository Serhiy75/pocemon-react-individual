import { Loader } from 'components';
import { PocemonList } from 'components/Pocemon/PocemonLIst/PocemonList';
import { useEffect, useState } from 'react';

import { getPokemons } from 'services/pocemonApi';

const Pocemons = () => {
  const [pocemons, setPocemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons().then(pocemons => {
      setPocemons(pocemons);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div>
        <PocemonList pocemons={pocemons} />
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Pocemons;
