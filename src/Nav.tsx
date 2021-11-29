import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { useThemeSwitcher } from './ThemeSwitcher';
import ThemeToggle from './ThemeToggle';

const SitckyNav = styled('nav')`
  position: sticky;
  top: 0;
  height: 48px;
  width: 100%;
  background-color: hsl(120deg, 50%, 30%);
  z-index: 1;
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--size-4);
  width: 100%;

  @media only screen and (min-width: 400px) {
    padding: 0 var(--size-10);
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const NavTitle = styled('h1')`
  color: var(--text-color-white);
`;

const Nav: Component = () => {
  const { switchTheme, isDarkTheme } = useThemeSwitcher();
  return (
    <SitckyNav>
      <Content>
        <NavTitle>BigGreen's Cool Algs</NavTitle>
        <ThemeToggle toggleTheme={switchTheme} checked={!isDarkTheme()} />
      </Content>
    </SitckyNav>
  );
};

export default Nav;
