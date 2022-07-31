import styled from "styled-components";

export const Content = styled.div`
  .inputBox {
    position: relative;
    width: 250px;

    & input {
      width: 100%;
      padding: 10px;
      border: 1px solid #1d2b3a;
      border-radius: 4px;
      outline: none;
      font-size: 1em;
      transition: border 0.5s;
    }
    & span {
      position: absolute;
      left: 0;
      padding: 10px;
      font-size: 1em;
      pointer-events: none;
      text-transform: uppercase;
      transition: transform 0.5s;
    }

    & input:valid ~ span,
    & input:focus ~ span {
      color: #1ea7fd; /* input required */
      transform: translateX(10px) translateY(-7px);
      -ms-transform: translateX(10px) translateY(-7px);
      background-color: #fff; // passar msm background do input
      font-size: 0.65em;
      padding: 0 10px;
      font-weight: 500;
      border-left: 1px solid #1ea7fd;
      border-right: 1px solid #1ea7fd;
      letter-spacing: 0.2em;
    }

    & input:valid,
    & input:focus {
      border: 1px solid #1ea7fd;
    }
  }
`;
