import type { Accessor, Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { Theme } from './ThemeSwitcher';
import { cmllCollection } from './Cmll';
import Cmll from './CmllCollection';
import Nav from './Nav';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.theme as Accessor<Theme>)().backgroundColor};
  color: ${props => (props.theme as Accessor<Theme>)().textColor};
`;

const Content = styled('div')`
  margin: 0 var(--size-10);

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const App: Component = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <Cmll cmllCollection={cmllCollection} />
      </Content>
    </Container>
  );
};

export default App;
