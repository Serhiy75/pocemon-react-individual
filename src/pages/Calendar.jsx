import { CastomCalendar } from 'components/CastomCalendar/CastomCalendar';

import React from 'react';
import Media from 'react-media';
import { Navigate } from 'react-router-dom';

const Calendar = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1199px)',
        default: ' screen and (max-width: 1199px)',
        desktop: '(min-width: 1200px)',
      }}
    >
      {matches => (matches.default ? <CastomCalendar /> : <Navigate to="/" />)}
    </Media>
  );
};

export default Calendar;
