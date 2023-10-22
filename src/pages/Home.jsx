// import { Section } from 'components/Section/Section';
import { Timer } from 'components/Timer';
import { VelcomImage } from 'components/VelcomImage/VelcomImage';
import { StyledHome } from './Home.styled';

const Home = () => {
  return (
    // <Section>
    <StyledHome>
      <VelcomImage />
      <Timer />
    </StyledHome>
    // </Section>
  );
};

export default Home;
