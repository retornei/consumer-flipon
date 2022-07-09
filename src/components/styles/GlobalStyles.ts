import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Roboto Slab', sans-serif;
    height: 100%;
    margin: 0;
  }
  
  *, button, input {
    border: 0;
  }
  
  button {
    cursor: pointer;
  }
  
`;
