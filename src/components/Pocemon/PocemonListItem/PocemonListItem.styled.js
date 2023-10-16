import styled from 'styled-components';
import { ReactComponent as GoHeart } from 'images/heart.svg';

export const StyledHeart = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;

  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover {
  }
`;
export const StyledHeartIcon = styled(GoHeart)`
  width: 18px;
  height: 18px;
  fill: ${({ $isInFavorites }) =>
    $isInFavorites ? 'rgba(52, 112, 255, 1)' : 'transparent'};
  stroke: ${({ $isInFavorites }) =>
    $isInFavorites ? 'rgba(52, 112, 255, 1)' : '#1000ff'};
`;
