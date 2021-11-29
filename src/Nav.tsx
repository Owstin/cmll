import { Component } from 'solid-js';
import { css, keyframes, styled } from 'solid-styled-components';

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
  cursor: default;
`;

const rainbowAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

const rainbowSlide = css`
  &:hover {
    background-image: linear-gradient(
      90deg,
      hsl(0, 75%, 60%),
      hsl(36, 75%, 60%),
      hsl(72, 75%, 60%),
      hsl(108, 75%, 60%),
      hsl(144, 75%, 60%),
      hsl(180, 75%, 60%),
      hsl(216, 75%, 60%),
      hsl(252, 75%, 60%),
      hsl(288, 75%, 60%),
      hsl(324, 75%, 60%),
      hsl(0, 75%, 60%)
    );
    animation: ${rainbowAnimation} 1000ms linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
`;

const Nav: Component = () => {
  const { switchTheme, isDarkTheme } = useThemeSwitcher();
  return (
    <SitckyNav>
      <Content>
        <NavTitle className={rainbowSlide}>BigGreen's Cool Algs</NavTitle>
        <ThemeToggle toggleTheme={switchTheme} checked={!isDarkTheme()} />
      </Content>
    </SitckyNav>
  );
};

export default Nav;
