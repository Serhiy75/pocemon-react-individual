import VelcomFamily from 'images/welcome-to-the-family.gif';
import { Container } from './VelcomImage.styled';

export const VelcomImage = () => {
  return (
    <Container>
      <img src={VelcomFamily} alt="Velcome to the family" />
    </Container>
  );
};
