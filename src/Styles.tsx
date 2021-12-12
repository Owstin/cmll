import { createGlobalStyles as createGlobalStyle } from 'solid-styled-components';
import './assets/pollen/pollen.css';

const Styles = createGlobalStyle`
  html {
    font-size: var(--size-4);
    width: var(--size-full);
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--font-sans);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  } 

  * {
    margin: 0;
    padding: 0;
  }
`;

export default Styles;
