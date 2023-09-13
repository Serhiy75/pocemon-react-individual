import { HeroList } from 'components/HeroList/HeroList';
import { useEffect, useState } from 'react';
import { getHero } from 'services/heroApi';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    // getHero('supergirl').then(data => {
    //   console.log(data);
    // });
    if (heroes.length) return;
    getHero().then(heroes => {
      setHeroes(heroes);
    });
  });

  return (
    <div>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default Heroes;
