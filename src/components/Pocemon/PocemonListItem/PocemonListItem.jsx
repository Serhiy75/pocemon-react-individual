import { Modal } from 'components/Modal/Modal';
import { PocemonDetaile } from 'components/Pocemon/PocemonDetaile/PocemonDetaile';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPocemon, deletePocemon } from 'redux/favorite/favoriteSlice';
import { selectFavoritePocemons } from 'redux/favorite/selector';
import { StyledHeart, StyledHeartIcon } from './PocemonListItem.styled';

export const PocemonItem = ({ pocemon }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const favoritePocemons = useSelector(selectFavoritePocemons);
  const dispatch = useDispatch();

  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };
  const handleToogleFavorites = pocemonId => {
    const persistedPocemons = favoritePocemons.find(
      ({ id }) => pocemonId === id
    );
    console.log(persistedPocemons);
    if (!persistedPocemons) {
      dispatch(addPocemon(pocemon));
    } else {
      dispatch(deletePocemon(pocemon.id));
    }
  };
  const isInFavorites = favoritePocemons.some(i => i.id === pocemon.id);
  console.log(isInFavorites);
  return (
    <>
      <li className="pocemon-item" onClick={handleClick}>
        <StyledHeart
          onClick={event => {
            event.stopPropagation();
            handleToogleFavorites(pocemon.id);
          }}
        >
          <StyledHeartIcon $isInFavorites={isInFavorites} />
        </StyledHeart>
        <img src={pocemon.sprites.front_default} alt="#"></img>
        {pocemon.name} {pocemon.id}
      </li>
      {toggleModal && (
        <Modal handleClick={handleClick} height={'70vh'}>
          <PocemonDetaile detaile={pocemon} />
        </Modal>
      )}
    </>
  );
};
