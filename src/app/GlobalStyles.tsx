import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

:root {
  --color-background-primary: #F9AA33;
  --color-background-secondary: white;
  --color-primary: white;
  --color-secondary: #F9AA33;

}

body {
  margin: 0;
  font-family: 'Roboto', 'Helvetica',
      sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }`;

export default GlobalStyle;
