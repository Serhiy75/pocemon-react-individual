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
  return (
    <div className="Overlay">
      <div className="Modal">
        <button onClick={handleClick}>close modal</button>
        {children}
      </div>
    </div>
  );
};
