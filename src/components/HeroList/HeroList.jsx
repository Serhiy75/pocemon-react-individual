import { HeroItem } from 'components/HeroItem/HeroItem';
import React from 'react';
import css from './HeroList.module.css';

export const HeroList = ({ heroes }) => {
  console.log(heroes);
  return (
    <>
      <ul className={css.herolist}>
        {heroes.map(hero => {
          return <HeroItem key={hero.id} hero={hero} />;
        })}
      </ul>
    </>
  );
};
