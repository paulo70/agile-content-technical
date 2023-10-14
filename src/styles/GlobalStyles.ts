import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, p, h1, h2, h3, ul, ol, li, figure, figcaption {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    scroll-behavior: smooth;
  }
  body {
    font-family: Arial, sans-serif;
  }
`;
