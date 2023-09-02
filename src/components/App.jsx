import { useEffect, useState } from 'react';
import { getPokemons } from '../services/pocemonApi';
import { PocemonList } from './PocemonLIst/PocemonList';

export const App = () => {
  const [pocemons, setPocemons] = useState([]);

  useEffect(() => {
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
