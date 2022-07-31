/* eslint-disable @next/next/no-img-element */
import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";

type CardFlipHoverProps = {
  imagesCover: string;
  imagesDetails: string;
  title: string;
  price: string;
};

export const CardFlipHover = ({
  imagesCover,
  imagesDetails,
  price,
  title
}: CardFlipHoverProps) => {
  return (
    <>
      <Content>
        <div className={"card"}>
          <div className={"cover"}>
            <img src={imagesCover} alt={title} />
          </div>
          <div className={"details"}>
            <div>
              <img src={imagesDetails} alt={title} />
              <h3>{title}</h3>
              <h2>
                <sup>R$</sup> {price}
              </h2>
              <a href="#">Comprar</a>
            </div>
          </div>
        </div>
      </Content>
      <ShowTsxAndCss
        tsx={`
    export const CardFlipHover = ({
      imagesCover,
      imagesDetails,
      price,
      title
    }: CardFlipHoverProps) => {
      return (
        <div className={"card"}>
          <div className={"cover"}>
            <img src={imagesCover} alt={title} />
          </div>
          <div className={"details"}>
            <div>
              <img src={imagesDetails} alt={title} />
              <h3>{title}</h3>
              <h2>
                <sup>R$</sup> {price}
              </h2>
              <a href="#">Comprar</a>
            </div>
          </div>
        </div>
      );
    };
    `}
        css={`
          .card {
            font-family: "Poppins", sans-serif;
            position: relative;
            width: 300px;
            height: 450px;
            min-height: 450px;
            background-color: #cafffb;
            transform-style: preserve-3d;
            transform: perspective(2000px);
            transition: 1s;
            box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.15),
              0 0 0 rgba(0, 0, 0, 0.15);
          }

          .card:hover {
            transform: perspective(2000px) translateX(50%);
            box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.15),
              0 0 0 rgba(0, 0, 0, 0.15);
          }

          .card:hover .cover {
            transform: rotateY(-180deg);
          }

          .card .cover {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #c6fcff;
            z-index: 2;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            transform-style: preserve-3d;
            overflow: hidden;
            transition: 1s ease-in-out;
            transform-origin: left;
          }

          .card .cover img {
            width: 100%;
            height: auto;
            object-fit: contain;
            z-index: 1;
          }

          .card .cover::before {
            content: "";
            position: absolute;
            width: 10px;
            height: 150%;
            transform: rotate(36.5deg);
            box-shadow: 0 0 0 20px #47bfce;
            transition: 0.5s;
            transition-delay: 1s;
          }

          .card:hover .cover::before {
            width: 0;
            box-shadow: 0 0 0 350px #47bfce;
            transform: rotate(143.5deg);
          }

          .card .details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            text-align: center;
            z-index: 1;
          }

          .card .details img {
            width: 15rem;
            height: 15rem;
            object-fit: contain;
          }

          .card .details h3 {
            font-weight: 500;
            margin: 5px 0;
          }

          .card .details h2 {
            font-size: 1.5em;
            color: #e82a5b;
            font-weight: 600;
          }
          .card .details a {
            display: inline-block;
            padding: 8px 20px;
            margin-top: 5px;
            background-color: #47bfce;
            color: #fafafa;
            letter-spacing: 1px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 500;
          }
        `}
      />
    </>
  );
};
