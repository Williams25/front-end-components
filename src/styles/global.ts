import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      @media (max-width: 1080px) {
        font-size: 93.75%; // tamanho da fonte * 0.9375
      }
      @media (max-width: 720px) {
        font-size: 87.5%; // tamanho da fonte * 0.875
      }
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.blue_400};
    }
    body,
    input,
    textarea,
    button {
      font-family: "Poppins", sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 600;
    }
  `}
`;
