import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: ${({ theme }) => theme.PrimaryBaseWhite};
    color: ${({ theme }) => theme.PrimaryBaseBlack};
    transition: background-color 0.25s ease, color 0.25s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select, textarea {
    font-family: inherit;
    border: none;
    outline: none;
    background: none;
  }

  button {
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background-color: ${({ theme }) => theme.PrimaryBlue600};
    color: #fff;
  }
`;