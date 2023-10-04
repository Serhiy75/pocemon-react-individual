import { Overlay } from 'components/Overlay/Overlay.styled';
import { useEffect } from 'react';
import { ModalStyled } from './Modal.styled';

export const Modal = ({ handleClick, children, height }) => {
  useEffect(() => {
    const handlePressKey = event => {
      if (event.code === 'Escape') {
        handleClick();
      }
    };
    window.addEventListener('keydown', handlePressKey);
    return () => window.removeEventListener('keydown', handlePressKey);
  }, [handleClick]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled height={height}>{children}</ModalStyled>
      {/* <button className="button" onClick={handleClick}>
        X
      </button> */}
    </Overlay>
  );
};
