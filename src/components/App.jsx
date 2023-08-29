import { useEffect, useState } from 'react';
import { getPokemons } from '../services/pocemonApi';
import { PocemonList } from './PocemonLIst/PocemonList';

export const App = () => {
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);
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
