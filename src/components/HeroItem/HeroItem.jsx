import { HeroDetaile } from 'components/HeroDetaile/HeroDetaile';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from './HeroItem.module.css';

export const HeroItem = ({ hero }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };
  return (
    <>
      <li className={css.heroitem} onClick={handleClick}>
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
