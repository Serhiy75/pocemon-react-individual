import { RotatingLines } from 'react-loader-spinner';
import { LoadRing } from './Loader.styled';

export const Loader = () => {
  return (
    <LoadRing>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoadRing>
  );
};
