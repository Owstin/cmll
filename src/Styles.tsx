import { createGlobalStyles as createGlobalStyle } from 'solid-styled-components';

const Styles = createGlobalStyle`
  :root {
    --color-white: #fff;
  }

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
    background-color: var(--color-white);
  }
`;

export default Styles;
