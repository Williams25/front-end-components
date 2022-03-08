import styled from "styled-components";

export const Content = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 380px;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
    display: flex;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .card:hover {
    width: 600px;
  }

  .card .imgBx {
    position: relative;
    min-width: 300px;
    height: 100%;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 2;
  }

  .card .imgBx img {
    max-width: 250px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.5s ease-in-out;
  }

  .card:hover .imgBx img {
    transform: rotate(35deg) translateX(20px) scale(1.2);
  }

  .card .details {
    position: absolute;
    left: 0;
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    height: 100%;
    background-color: #4ba9e9;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    z-index: 1;
    transition: 0.5s ease-in-out;
  }

  .card .details::before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff;
  }

  .card:hover .details {
    left: 300px;
  }

  .card .details h2,
  .card .details h3,
  .card .details h4,
  .card .details p {
    margin: 0;
    padding: 0;
  }

  .card .details h3 {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1em;
  }

  .card .details h3 span {
    font-weight: 300;
    font-size: 0.65em;
    text-transform: none;
    opacity: 0.85;
  }

  .card .details h4 {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9em;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1em;
  }

  .card .details p {
    color: #fff;
    opacity: 0.85;
    font-size: 0.8em;
  }

  .card .details .size {
    display: flex;
    gap: 10px;
    margin: 0;
  }

  .card .details .size li {
    list-style: none;
    color: #fff;
    font-size: 0.9em;
    font-weight: 500;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    opacity: 0.5;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
  }

  .card .details .size li:hover {
    color: #4ba9e9;
    background-color: #fff;
    opacity: 1;
  }

  .card .details .group {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .card .details .group h2 {
    color: #fff;
    font-size: 2em;
    font-weight: 600;
  }

  .card .details .group h2 sup {
    font-weight: 300;
  }

  .card .details .group h2 small {
    font-size: 0.75em;
  }

  .card .details .group a {
    display: inline-flex;
    padding: 10px 25px;
    background-color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
  }
`;
