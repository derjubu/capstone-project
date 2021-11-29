import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

:root {
  --background-title: #0000ffff;
}

body {
  margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }`;

export default GlobalStyle;
