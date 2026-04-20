import { render } from 'solid-js/web';
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
    <MetaProvider>
      <ThemeSwitcher>
        <Head />
        <Styles />
        <App />
      </ThemeSwitcher>
    </MetaProvider>
  ),
  document.getElementById('root')
);
