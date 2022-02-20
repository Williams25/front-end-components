import styled from "styled-components";

export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,800;0,900;1,700&display=swap");

  .card {
    font-family: "Poppins", sans-serif;
    width: 300px;
    height: 380px;
    margin: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: 0.5s ease-in-out;
  }

  .card .imgBx {
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: 0.5s ease-in-out;
  }

  .card .imgBx h2 {
    margin: 0;
    font-weight: 600;
    position: relative;
    top: -20px;
  }

  .card .imgBx img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.5s ease-in-out;
    margin: 0 0 20px;
  }

  .card:hover .imgBx {
    transform: translateY(-100px);
  }

  .card:hover .imgBx img {
    transform: translate(-40px, -20px) rotate(20deg) scale(1.4);
  }

  .card .content {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  .card .content .size,
  .card .content .color {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8px 20px;
  }

  .card .content .color h3,
  .card .content .size h3 {
    margin: 0;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .card .content .size span {
    width: 26px;
    height: 26px;
    color: #000;
    background-color: #cececeee;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 24px;
    border-radius: 4px;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
  }

  .card .content .size span:hover {
    background-color: #9bdc28;
  }

  .card .content .color span {
    width: 20px;
    height: 20px;
    background-color: #f00;
    border-radius: 50%;
    margin: 0 5px;
    border: 2px solid #000aaaaa;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.5s;
  }

  .card .content a {
    position: relative;
    top: 10px;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 40px;
    background-color: red;
    font-weight: 600;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
  }

  .card:hover .content {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50px);
    position: absolute;
    bottom: -10px;
  }
`;
