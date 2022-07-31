import styled, { css } from "styled-components";

export const Details = styled.details`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 0.5rem;
    text-transform: uppercase;
    color: ${theme.colors.white_100};
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s;

    summary {
      list-style: none;
      cursor: pointer;
      user-select: none;
    }

    & + & {
      border-top: 1px solid ${theme.colors.blue_600};
    }

    & .active-animation-details-summary {
      animation: showDetailsSummary 0.2s forwards;
    }
    & .hidden-animation-details-summary {
      animation: hiddenDetailsSummary 0.2s forwards;
    }

    & ul {
      width: 100%;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      margin-top: 1rem;

      & li {
        list-style: none;
        width: inherit;

        & a {
          width: inherit;
          display: block;
          text-align: left;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.875rem;
          color: ${theme.colors.white_200};
          text-transform: uppercase;
          cursor: pointer;
          background-color: transparent;
          border: 0;
          outline: none;
          transition: filter 0.2s;
          text-decoration: none;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }

    @keyframes showDetailsSummary {
      from {
        transform: translate(0, -5px);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    @keyframes hiddenDetailsSummary {
      from {
        transform: translate(0, 0);
        opacity: 1;
      }
      to {
        transform: translate(0, -5px);
        opacity: 0;
      }
    }
  `}
`;
