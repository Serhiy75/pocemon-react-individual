import ReactSwitch from 'react-switch';

export const ToggleTheme = ({ setTheme, theme }) => {
  const onChangeTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ReactSwitch onChange={onChangeTheme} checked={theme === 'dark'} />
    </div>
  );
};
