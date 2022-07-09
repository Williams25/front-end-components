/* eslint-disable @next/next/no-img-element */
import { Content } from "./styles";

export const CardProductScale = () => {
  return (
    <Content>
      <div className="card">
        <div className="circle">
          <img
            src="/assets/img/cocacola_logo.png"
            alt="logo da cocacola"
            className="logo"
          />
        </div>
        <div className="content">
          <h2>Coca-Cola</h2>

          <p>
            lorem ipsum lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem
            ipsum lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum
            lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum lorem
          </p>

          <a href="#">Explore</a>
        </div>

        <img
          src="/assets/img/cocacola.png"
          alt="garrafa de cocacola"
          className="product-image"
        />
      </div>
    </Content>
  );
};
