import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { DiRuby } from 'react-icons/di';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showTopBtn && (
        <button
          style={{
            position: 'fixed',
            right: '30px',
            bottom: '30px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(220deg)',
          }}
          onClick={goToTop}
        >
          <IconContext.Provider
            value={{
              color: 'green',
              size: '40px',
            }}
          >
            <DiRuby />
          </IconContext.Provider>
        </button>
      )}
    </>
  );
};
