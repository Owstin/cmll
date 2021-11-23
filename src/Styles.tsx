import { createGlobalStyles as createGlobalStyle } from 'solid-styled-components';

const Styles = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-grey: hsl(0, 0%, 17%);
    --color-light-grey: hsl(0, 0%, 25%);
    --text-color-black: rgba(0, 0, 0, 0.87);
    --text-color-white: rgba(255, 255, 255, 0.87);
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
  }
`;

export default Styles;
