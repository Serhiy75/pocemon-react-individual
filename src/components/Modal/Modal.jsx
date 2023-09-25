import { useEffect } from 'react';

export const Modal = ({ handleClick, children }) => {
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
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
      <button className="button" onClick={handleClick}>
        X
      </button>
    </div>
  );
};
