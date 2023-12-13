// import { Section } from 'components/Section/Section';

import { Timer } from 'components/Timer';
import { VelcomImage } from 'components/VelcomImage/VelcomImage';
import { StyledHome } from './Home.styled';
import { CastomCalendar } from 'components/CastomCalendar/CastomCalendar';

const Home = () => {
  return (
    // <Section>
    <StyledHome>
      <VelcomImage />
      <Timer />
      <CastomCalendar />
    </StyledHome>
    // </Section>
  );
};

export default Home;
