import styled from "styled-components";

export const Content = styled.div`
  margin: 1.5rem 0;
  .contentSocialMedia {
    position: relative;
    display: flex;
    gap: 50px;
    margin: 0;
    padding: 0;
  }

  .contentSocialMedia li {
    list-style: none;
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
  }

  .contentSocialMedia li a {
    position: relative;
    text-decoration: none;
    color: #ff0000;
    z-index: 10;
    font-size: 2rem;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contentSocialMedia li:hover a {
    font-size: 3rem;
    /* filter: drop-shadow(0 0 20px #ff0000) drop-shadow(0 0 40px #ff0000)
      drop-shadow(0 0 60px #ff0000); */
    z-index: 1;
  }

  .contentSocialMedia li:hover {
    z-index: 1000;
    transform: scale(0.75);
  }

  .contentSocialMedia li::before {
    content: "";
    position: absolute;
    inset: 30px;
    box-shadow: 0 0 0 10px #ff0000, 0 0 0 20px #001e3c, 0 0 0 22px #ff0000;
    transition: 0.5s;
  }

  .contentSocialMedia li:hover::before {
    inset: 0;
  }

  .contentSocialMedia li::after {
    content: "";
    position: absolute;
    inset: 0;
    transition: 0.5s;
    background: #001e3c;
    transform: rotate(45deg);
  }
`;
