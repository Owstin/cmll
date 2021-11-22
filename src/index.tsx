import 'pollen-css';
import { render } from 'solid-js/web';
import { MetaProvider } from 'solid-meta';

import App from './App';
import Head from './Head';
import Styles from './Styles';
import ThemeSwitcher from './ThemeSwitcher';

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
