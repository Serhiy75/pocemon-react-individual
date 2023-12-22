import styled from 'styled-components';
import { GiNightSky } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa6';
import ReactSwitch from 'react-switch';

export const Container = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50px;
`;

export const ReactSwitchStyled = styled(ReactSwitch)`
  & .react-switch-bg {
    background-color: ${({ theme }) => theme.colors.switch} !important;
  }
  & .react-switch-handle {
    background-color: transparent !important;
    &div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const GiNightSkyStyled = styled(GiNightSky)`
  color: fuchsia;
  width: 26px;
  height: 26px;
`;
export const FaRegLightbulbStyled = styled(FaRegLightbulb)`
  color: #f1cc17;
  height: 26px;
  width: 26px;
`;
