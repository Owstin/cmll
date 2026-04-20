import { createGlobalStyles as createGlobalStyle } from 'solid-styled-components';
import 'pollen-css';
import './variables.css';

const Styles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-sans);
  }

  html {
    font-size: var(--size-4);
    width: var(--size-full);
  }
`;

export default Styles;
