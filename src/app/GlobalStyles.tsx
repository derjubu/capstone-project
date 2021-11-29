import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

:root {
  --color-background-primary: #000fff;
  --color-background-secondary: white;
  --color-primary: white;
  --color-secondary: #000fff;
}

body {
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }`;

export default GlobalStyle;
