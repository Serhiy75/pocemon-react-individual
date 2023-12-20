import React, { useState } from 'react';
import { Container } from './MobileMenu.styled';
import MobileMenuButton from 'components/MobileMenuButton/MobileMenuButton';
import { MobileMenuList } from 'components/MobileMenuList/MobileMenuList';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Container open={open}>
      <MobileMenuButton handleClick={handleClick} open={open} />
      {open && <MobileMenuList open={open} handleClick={handleClick} />}
    </Container>
  );
};

export default MobileMenu;
