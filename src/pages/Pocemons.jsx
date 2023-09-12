import { PocemonList } from 'components/PocemonLIst/PocemonList';
import { useEffect, useState } from 'react';
import { getHero } from 'services/heroApi';
import { getPokemons } from 'services/pocemonApi';

const Pocemons = () => {
  const [pocemons, setPocemons] = useState([]);

  useEffect(() => {
    getHero('supergirl').then(data => {
      console.log(data);
    });
    if (pocemons.length) return;
    getPokemons().then(pocemons => {
      setPocemons(pocemons);
    });
  });

  return (
    <div>
      <PocemonList pocemons={pocemons} />
    </div>
  );
};

export default Pocemons;
