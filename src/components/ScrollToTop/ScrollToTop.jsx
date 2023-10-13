import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { DiRuby } from 'react-icons/di';
import { ScrollButton } from './ScrollToTop.styled';

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
        <ScrollButton onClick={goToTop}>
          <IconContext.Provider value={{}}>
            <DiRuby />
          </IconContext.Provider>
          <span> To Top</span>
        </ScrollButton>
      )}
    </>
  );
};
