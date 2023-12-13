import styled from 'styled-components';
import Calendar from 'react-calendar';

export const CalendarStyled = styled(Calendar)`
  &.react-calendar {
    width: 350px;
    max-width: 100%;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    height: 330px;
  }
  & button.react-calendar__tile--range {
    color: yellow;
  }
`;
