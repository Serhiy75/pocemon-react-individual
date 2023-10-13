import errorImage from 'images/man-pointing-up.jpg';
import { Container, NotInlist, Travolta } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Travolta src={errorImage} alt="Nothing in List" />
      <NotInlist>Enter something to search!</NotInlist>
    </Container>
  );
};
