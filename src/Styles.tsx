import { createGlobalStyles as createGlobalStyle } from 'solid-styled-components';

const Styles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
  }

  html {
    font-size: 16px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.10);
  }
`;

export default Styles;
