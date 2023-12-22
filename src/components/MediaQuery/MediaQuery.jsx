import React from 'react';
import Media from 'react-media';

export const MediaQuery = ({ children, device }) => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1199px)',
        default: ' screen and (max-width: 1199px)',
        desktop: '(min-width: 1200px)',
      }}
    >
      {matches => matches[device] && children}
    </Media>
  );
};
