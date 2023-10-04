import { Modal } from 'components/Modal/Modal';
import { PocemonDetaile } from 'components/Pocemon/PocemonDetaile/PocemonDetaile';
import { useState } from 'react';

export const PocemonItem = ({ pocemon }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };
  return (
    <>
      <li className="pocemon-item" onClick={handleClick}>
        <img src={pocemon.sprites.front_default} alt=""></img>
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
