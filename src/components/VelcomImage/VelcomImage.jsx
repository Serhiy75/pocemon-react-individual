import VelcomFamily from 'images/welcome-to-the-family.gif';
import { Container, FamelyImg } from './VelcomImage.styled';

export const VelcomImage = () => {
  return (
    <Container>
      <FamelyImg src={VelcomFamily} alt="Velcome to the family" />
    </Container>
  );
};
