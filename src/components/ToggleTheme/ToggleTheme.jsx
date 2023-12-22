import { useContext } from 'react';
import {
  Container,
  FaRegLightbulbStyled,
  GiNightSkyStyled,
  ReactSwitchStyled,
} from './ToggleTheme.styled';
import { ThemeContext } from 'ThemeContext';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ReactSwitchStyled
        className="reactSwitch"
        uncheckedHandleIcon={<FaRegLightbulbStyled />}
        checkedHandleIcon={<GiNightSkyStyled />}
        checkedIcon={<FaRegLightbulbStyled />}
        uncheckedIcon={<GiNightSkyStyled />}
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
    </Container>
  );
};
