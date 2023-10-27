import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = (key = 'theme', value = 'light') => {
  const [theme, setTheme] = useLocalStorage(key, value);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return [selectedTheme, setTheme];
};
