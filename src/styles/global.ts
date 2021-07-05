import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    background-color: none;
    outline: none;
    border: none;
  }

  body {
    font-family: Inter, sans-serif;
  }
`;