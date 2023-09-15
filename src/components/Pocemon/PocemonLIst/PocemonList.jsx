import { PocemonItem } from 'components/Pocemon/PocemonListItem/PocemonListItem';
import React from 'react';

export const PocemonList = ({ pocemons }) => {
  return (
    <>
      <ul className="pocemon-list">
        {pocemons.map(pocemon => {
          return <PocemonItem key={pocemon.name} pocemon={pocemon} />;
        })}
      </ul>
    </>
  );
};
