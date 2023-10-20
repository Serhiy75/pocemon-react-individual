import { Section } from 'components/Section/Section';
import { Timer } from 'components/Timer';
import { VelcomImage } from 'components/VelcomImage/VelcomImage';

const Home = () => {
  return (
    <Section>
      <VelcomImage />
      <Timer />
    </Section>
  );
};

export default Home;
