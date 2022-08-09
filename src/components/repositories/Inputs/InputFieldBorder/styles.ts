import styled from "styled-components";

export const Content = styled.div`
  margin-top: 2rem;

  .inputBox {
    position: relative;
    width: 250px;

    & input {
      width: 100%;
      padding: 10px;
      border: 1px solid #21558b;
      background-color: transparent;
      color: #fff;
      border: none;
      outline: none;
      font-size: 1em;
      transition: border 0.2s linear;
      letter-spacing: 0.1em;
    }

    & span {
      position: absolute;
      left: 0;
      padding: 10px 0 5px;
      color: #fff;
      text-transform: uppercase;
      pointer-events: none;
      letter-spacing: 0.1em;
      transition: all 0.2s linear;
      transition-delay: 0;
    }

    & input:valid ~ span,
    & input:focus ~ span {
      color: #fff;
      font-size: 0.65em;
      transform: translateY(-16px);
      -ms-transform: translateY(-16px);
    }

    & i {
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: all 0.2s linear;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          #21558b,
          #3399ff,
          #007fff,
          #132f4c,
          #21558b
        );
        animation: gradient 2s linear infinite;
        transition: all 0.5s linear;
      }
    }

    & input:valid ~ i::before,
    & input:focus ~ i::before {
      left: 0;
    }

    @keyframes gradient {
      from {
        background-position-x: 0;
      }
      to {
        background-position-x: 250px;
      }
    }
  }
`;
