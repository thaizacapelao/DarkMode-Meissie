import "styled-components";

declare module 'styled-components' {

  export interface DefaultTheme extends ThemeProps {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
