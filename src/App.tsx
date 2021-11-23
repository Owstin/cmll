import type { Accessor, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

import { cmllCollection } from './Cmll';
import Cmll from './CmllCollection';
import { Theme, useThemeSwitcher } from './ThemeSwitcher';

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
  const { switchTheme } = useThemeSwitcher();
  return (
    <Container>
      <Content>
        <input type="checkbox" onchange={switchTheme} />
        <Cmll cmllCollection={cmllCollection} />
      </Content>
    </Container>
  );
};

export default App;
