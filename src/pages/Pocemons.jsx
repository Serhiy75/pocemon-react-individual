import { PocemonList } from 'components/Pocemon/PocemonLIst/PocemonList';
import { useEffect, useState } from 'react';
import { getPokemons } from 'services/pocemonApi';

const Pocemons = () => {
  const [pocemons, setPocemons] = useState([]);

  useEffect(() => {
    getPokemons().then(pocemons => {
      setPocemons(pocemons);
    });
  }, []);

  return (
    <div>
      <PocemonList pocemons={pocemons} />
    </div>
  );
};

export default Pocemons;
