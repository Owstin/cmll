import { Component, createContext, createSignal, useContext } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';

const defaultTheme = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--text-color-black)',
  cardColor: 'var(--color-white)',
};

const darkTheme = {
  backgroundColor: 'var(--color-grey)',
  textColor: 'var(--text-color-white)',
  cardColor: 'var(--color-light-grey)',
};

type Theme = typeof defaultTheme;

type Actions = {
  switchTheme: () => void;
};

const ThemeSwitcherContext = createContext<Actions>();

const ThemeSwitcher: Component = props => {
  const [theme, setTheme] = createSignal(darkTheme);
  const switchTheme = () => {
    setTheme(darkTheme);
  };
  return (
    <ThemeSwitcherContext.Provider value={{ switchTheme }}>
      <ThemeProvider theme={theme()}>{props.children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useThemeSwitcher = (): Actions => useContext(ThemeSwitcherContext);

export default ThemeSwitcher;

export { useThemeSwitcher, Theme };
