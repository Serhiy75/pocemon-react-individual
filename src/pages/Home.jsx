// import { Section } from 'components/Section/Section';

import { Timer } from 'components/Timer';
import { VelcomImage } from 'components/VelcomImage/VelcomImage';
import { StyledHome } from './Home.styled';
import { CastomCalendar } from 'components/CastomCalendar/CastomCalendar';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';

const Home = () => {
  return (
    // <Section>
    <StyledHome>
      <VelcomImage />
      <Timer />
      <MediaQuery device="desktop">
        <CastomCalendar />
      </MediaQuery>
    </StyledHome>
    // </Section>
  );
};

export default Home;
