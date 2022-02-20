/* eslint-disable @next/next/no-img-element */
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
  );
};
