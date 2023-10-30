import { useContext } from 'react';
import {
  FaRegLightbulbStyled,
  GiNightSkyStyled,
  ReactSwitchStyled,
} from './ToggleTheme.styled';
import { ThemeContext } from 'ThemeContext';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <ReactSwitchStyled
        className="reactSwitch"
        uncheckedHandleIcon={<FaRegLightbulbStyled />}
        checkedHandleIcon={<GiNightSkyStyled />}
        checkedIcon={<FaRegLightbulbStyled />}
        uncheckedIcon={<GiNightSkyStyled />}
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
    </div>
  );
};
