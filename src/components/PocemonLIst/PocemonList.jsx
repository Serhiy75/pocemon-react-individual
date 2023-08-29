import React from 'react';
import { PocemonItem } from './PocemonListItem';

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
