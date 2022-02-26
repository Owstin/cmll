import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { useRoutes } from 'solid-app-router';

import Header from './Header';
import { routes } from './routes';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme().backgroundColor};
  color: ${props => props.theme().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`;

const Content = styled.main`
  padding-top: var(--header-height);
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <PageContainer>
      <Header />
      <Content>
        <Routes />
      </Content>
    </PageContainer>
  );
};

export default App;
