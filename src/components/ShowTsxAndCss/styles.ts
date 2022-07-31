import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 700px;

    & .contentButton {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: 2rem 0;

      & button {
        margin: 0 1rem 0 0;
        border: 0;
        padding: 0.5rem 1rem;
        width: 8rem;
        cursor: pointer;
        border-radius: 5px;
        background-color: ${theme.colors.blue_300};
        color: ${theme.colors.white_100};
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.5s;

        &:hover {
          letter-spacing: 0.2em;
          filter: brightness(0.5);
        }
      }

      & .activeButton {
        background-color: ${theme.colors.blue_800};
        color: ${theme.colors.white_100};
        transition: all 0.5s;
        letter-spacing: 0.2em;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  `}
`;
