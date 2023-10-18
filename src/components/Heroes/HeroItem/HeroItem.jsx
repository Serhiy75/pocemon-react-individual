import { HeroDetaile } from 'components/Heroes/HeroDetaile/HeroDetaile';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from './HeroItem.module.css';
import { selectFavoriteHeroes } from 'redux/favorite/selector';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, deleteHero } from 'redux/favorite/favoriteSlice';
import {
  StyledButton,
  StyledHeartIcon,
} from 'components/FavoriteBtn/FavoriteBtn.styled';

export const HeroItem = ({ hero }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const favoriteHeroes = useSelector(selectFavoriteHeroes);
  const dispatch = useDispatch();
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };
  const handleToogleFavorites = heroId => {
    const persistedHeroes = favoriteHeroes.find(({ id }) => heroId === id);

    if (!persistedHeroes) {
      dispatch(addHero(hero));
    } else {
      dispatch(deleteHero(hero.id));
    }
  };
  const isInFavorites = favoriteHeroes.some(i => i.id === hero.id);

  return (
    <>
      <li className={css.heroitem} onClick={handleClick}>
        <StyledButton
          onClick={event => {
            event.stopPropagation();
            handleToogleFavorites(hero.id);
          }}
        >
          <StyledHeartIcon $isInFavorites={isInFavorites} />
        </StyledButton>
        <img className={css.imgitem} src={hero.images.md} alt="superhero"></img>
        {hero.name}: {hero.appearance.height[1]}; {hero.appearance.weight[1]}
      </li>
      {toggleModal && (
        <Modal handleClick={handleClick}>
          <HeroDetaile detaile={hero} />
        </Modal>
      )}
    </>
  );
};
