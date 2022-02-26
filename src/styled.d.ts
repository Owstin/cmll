import 'solid-styled-components';

declare module 'solid-styled-components' {
  interface Theme {
    backgroundColor: string;
    cardColor: string;
    navColor: string;
    textColor: string;
  }

  export interface DefaultTheme {
    (): Theme;
  }
}
