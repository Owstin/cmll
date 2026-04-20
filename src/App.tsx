import type { Component } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { styled } from 'solid-styled-components';

import { cmllCollection } from './Cmll';
import Cmll from './CmllCollection';
import Head from './Head';
import Styles from './Styles';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled('div')`
  margin: 0 40px;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const App: Component = () => (
  <MetaProvider>
    <Head />
    <Styles />
    <Container>
      <Content>
        <Cmll cmllCollection={cmllCollection} />
      </Content>
    </Container>
  </MetaProvider>
);

export default App;
