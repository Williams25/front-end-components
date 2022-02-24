import styled from "styled-components";

export const Content = styled.div`
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .container label {
    position: relative;
    margin: 5px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 2em;
  }

  .container label input {
    appearance: none;
    display: none;
  }

  .container label span {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    /* background-color: #ccc; */
    margin-right: 15px;
    transition: 0.5s;
  }

  .container label span::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: blue;
    box-shadow: 0 -27px 0 blue;
    transition: 0.5s;
  }

  .container label span::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: blue;
    box-shadow: 27px 0 0 blue;
    transition: 0.5s;
  }

  .container label input:checked ~ span.check::before {
    background: green;
    box-shadow: 0 0 0 transparent;
  }

  .container label input:checked ~ span.check::after {
    background: green;
    box-shadow: 0 0 0 transparent;
    height: 50%;
  }

  .container label input:checked ~ span.check {
    transform: rotate(-45deg) translate(10px, -9px);
  }

  .container label input:not(:checked) ~ span.check::before {
    background: red;
    box-shadow: 0 0 0 transparent;
    transform: rotate(-45deg) translate(10px, -9px);
  }

  .container label input:not(:checked) ~ span.check::after {
    background: red;
    box-shadow: 0 0 0 transparent;
    transform: rotate(-45deg) translate(10px, 10px);
  }
`;
