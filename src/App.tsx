import type { Accessor, Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { Theme } from './ThemeSwitcher';
import { cmllCollection } from './Cmll';
import Cmll from './CmllCollection';
import Header from './Header';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.theme as Accessor<Theme>)().backgroundColor};
  color: ${props => (props.theme as Accessor<Theme>)().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`;

const Content = styled('main')`
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const App: Component = () => (
  <Container>
    <Header />
    <Content>
      <Cmll cmllCollection={cmllCollection} />
    </Content>
  </Container>
);

export default App;
