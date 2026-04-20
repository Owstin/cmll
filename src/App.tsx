import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { cmllCollection } from './Cmll';
import Cmll from './CmllCollection';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled('div')`
  margin: 0 var(--size-10);

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const App: Component = () => (
  <Container>
    <Content>
      <Cmll cmllCollection={cmllCollection} />
    </Content>
  </Container>
);

export default App;
