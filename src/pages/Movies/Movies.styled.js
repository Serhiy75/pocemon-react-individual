import styled from 'styled-components';
import { Tab } from 'react-tabs';

export const TabStyled = styled(Tab)`
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  &.react-tabs__tab--selected {
    background-color: #ff60a8;

    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
  }
`;
