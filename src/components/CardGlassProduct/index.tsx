/* eslint-disable @next/next/no-img-element */
import { Content } from "./styles";

export const CardGlassProduct = () => {
  return (
    <Content>
      <div className={"card"}>
        <div className={"imgBx"}>
          <img src="/assets/img/nike01.png" alt="" />
          <h2>Nike</h2>
        </div>
        <div className={"content"}>
          <div className={"size"}>
            <h3>Tamanho: </h3>
            <span>7</span>
            <span>7</span>
            <span>7</span>
            <span>7</span>
          </div>

          <div className={"color"}>
            <h3>Cor: </h3>
            <span />
            <span />
            <span />
            <span />
          </div>

          <a href="#">Comprar</a>
        </div>
      </div>
    </Content>
  );
};
