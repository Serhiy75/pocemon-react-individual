import { Overlay } from 'components/Overlay/Overlay.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Overlay>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Overlay>
  );
};
