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
    }

    & main {
      width: 100%;
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 1rem;

      & aside {
        max-width: 300px;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.blue_500};
        border-right: 1px solid ${theme.colors.blue_600};
        padding: 1rem 0.5rem;
        overflow-x: hidden;
      }

      & #content-section {
        flex: 1;
        padding: 1rem 0.5rem;
      }
    }
  `}
`;
