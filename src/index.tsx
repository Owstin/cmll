import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { MetaProvider } from 'solid-meta';
import { setup } from 'solid-styled-components';

import { prefixer } from './prefixer';
import App from './App';
import Head from './Head';
import Styles from './Styles';
import ThemeSwitcher from './ThemeSwitcher';

setup(prefixer);

render(
  () => (
    <Router base={import.meta.env.BASE_URL}>
      <MetaProvider>
        <ThemeSwitcher>
          <Head />
          <Styles />
          <App />
        </ThemeSwitcher>
      </MetaProvider>
    </Router>
  ),
  document.getElementById('root')
);
