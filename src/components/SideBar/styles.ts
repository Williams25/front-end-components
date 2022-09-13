import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    & header {
      width: 100%;
      height: 80px;
      padding: 1rem;
      background-color: ${theme.colors.blue_500};
      border-bottom: 1px solid ${theme.colors.blue_600};
      display: flex;
      align-items: center;
      & h1 {
        color: ${theme.colors.blue_300};
        font-size: 1.125rem;
        letter-spacing: 0.1em;
      }
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    }

    & main {
      width: 100%;
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 1rem;
      margin-top: calc(80px + 2rem);

      & aside {
        max-width: 300px;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.blue_500};
        border-right: 1px solid ${theme.colors.blue_600};
        padding: 0 0.5rem 1rem;
        overflow-x: hidden;
        position: fixed;
        top: 80px;
        left: 0;
        z-index: 10;
      }

      & #content-section {
        flex: 1;
        padding: 1rem 0.5rem;
      }
    }
  `}
`;
