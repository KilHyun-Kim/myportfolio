import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif; 
  }
`;

export default GlobalStyle;
