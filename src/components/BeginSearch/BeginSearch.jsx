// import errorImage from 'images/man-pointing-up.jpg';
import { Container, NotInlist, Travolta } from './BeginSearch.styled';

export const BeginSearch = ({ image }) => {
  return (
    <Container>
      <Travolta src={image} alt="Nothing in List" />
      <NotInlist>Enter something to search!</NotInlist>
    </Container>
  );
};
