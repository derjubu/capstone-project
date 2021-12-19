import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

:root {
  --color-background-primary: #2556FF;
  --color-background-secondary: white;
  --color-primary: white;
  --color-secondary: #2556FF;

}

:-webkit-any-link {
  text-decoration: none
}

:-moz-any-link {
  text-decoration: none
}

:any-link {
  text-decoration: none
}

body {
  margin: 0 auto 0 auto;
  font-family: 'Roboto', 'Helvetica',
      sans-serif;
  max-width: 640px;
  background-color: #FBFBFB;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  };
`;

export default GlobalStyle;
