import {
  Container,
  LIneMidle,
  LineBottom,
  LineTop,
} from './MobileMunuButton.styled';

const MobileMenuButton = ({ handleClick, open }) => {
  return (
    <Container onClick={handleClick}>
      <LineTop open={open} />
      <LIneMidle open={open} />
      <LineBottom open={open} />
    </Container>
  );
};

export default MobileMenuButton;
