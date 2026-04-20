import { Component, createContext, createEffect, createSignal, on, useContext } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';

const lightTheme = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--text-color-black)',
  cardColor: 'var(--color-white)',
};

const darkTheme = {
  backgroundColor: 'var(--color-grey)',
  textColor: 'var(--text-color-white)',
  cardColor: 'var(--color-light-grey)',
};

type Theme = typeof lightTheme;

type Actions = {
  switchTheme: () => void;
  isDarkTheme: () => boolean;
};

const ThemeSwitcherContext = createContext<Actions>();

const themeProp = 'theme';

const getInitialTheme = () => {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem(themeProp);

  return storedTheme ? storedTheme : isDark ? 'dark' : 'light';
};

const selectTheme = (isDark: boolean) => (isDark ? darkTheme : lightTheme);
const ThemeSwitcher: Component = props => {
  const [themeName, setThemeName] = createSignal(getInitialTheme());
  const [theme, setTheme] = createSignal(selectTheme(themeName() === 'dark'));

  const switchTheme = () => {
    setThemeName(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  createEffect(
    on(
      themeName,
      () => {
        localStorage.setItem(themeProp, themeName());
        setTheme(selectTheme(themeName() === 'dark'));
      },
      { defer: true }
    )
  );

  return (
    <ThemeSwitcherContext.Provider
      value={{ switchTheme, isDarkTheme: () => themeName() === 'dark' }}
    >
      <ThemeProvider theme={() => theme()}>{props.children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useThemeSwitcher = (): Actions => useContext(ThemeSwitcherContext);

export default ThemeSwitcher;

export { useThemeSwitcher, Theme };
