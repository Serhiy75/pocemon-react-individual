import errorImage from 'images/pulp-fiction-john-travolta.gif';
import { Container } from './Error.styled';

export const Error = () => {
  return (
    <Container>
      <img src={errorImage} alt="travolta" />
    </Container>
  );
};
