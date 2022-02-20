/* eslint-disable @next/next/no-img-element */
import { Content } from "./styles";

type CardHexagonProps = {
  image: string;
  title: string;
  description: string;
};

export const CardHexagon = ({
  description,
  image,
  title
}: CardHexagonProps) => {
  return (
    <Content>
      <div className={"hexagon"}>
        <div className={"shape"}>
          <img src={image} alt={title} />

          <div className={"content"}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Content>
  );
};
