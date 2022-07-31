/* eslint-disable @next/next/no-img-element */
import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";

export const CardProductScale = () => {
  return (
    <>
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

      <ShowTsxAndCss
        tsx={`export const CardProductScale = () => {
  return (
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
  )
            `}
        css={`
          .card {
            position: relative;
            width: 300px;
            height: 300px;
            border-radius: 20px;
            transition: 0.5s;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &:hover {
              width: 600px;
              transition-delay: 0;
            }

            .circle {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 20px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #cb0001;
                clip-path: circle(120px at center);
                transition: 0.5s;
              }

              .logo {
                position: relative;
                width: 200px;
                transition: 0.5s;
                transition-delay: 0.5s;
              }
            }

            &:hover .circle::before {
              clip-path: circle(400px at center);
            }

            &:hover .circle .logo {
              transform: scale(0);
              transition-delay: 0;
            }

            .content {
              position: relative;
              height: 100%;
              width: 50%;
              left: 20%;
              padding: 20px 20px 20px 40px;
              opacity: 0;
              visibility: hidden;
              transition: 0.2s;

              h2 {
                color: #fff;
                text-transform: uppercase;
                font-size: 1.5em;
                line-height: 1em;
                margin: 0;
              }
              p {
                color: #fff;
                margin: 0 0 1rem;
              }
              a {
                position: relative;
                color: #111;
                background-color: #fff;
                padding: 10px 20px;
                margin-top: 10px;
                text-decoration: none;
                border-radius: 4px;
                font-weight: 500;
              }
            }

            &:hover .content {
              transform: scale(1);
              left: 0;
              opacity: 1;
              visibility: visible;
              transition-delay: 0.5s;
            }

            .product-image {
              position: absolute;
              transform: translate(-50%, -50%) scale(0);
              height: 400px;
              top: 50%;
              left: 50%;
              transition: 0.5s;
              transition-delay: 0s;
            }

            &:hover .product-image {
              left: 72%;
              transition-delay: 0.5s;
              transform: translate(-50%, -50%) scale(1);
            }

            @media (max-width: 991px) {
              width: auto;
              max-width: 350px;
              align-items: flex-start;

              .content {
                width: 100%;
                left: 0;
                padding: 40px;
              }

              &:hover {
                height: 600px;

                .product-image {
                  top: initial;
                  bottom: 10px;
                  left: 50%;
                  transform: translate(-50%, 0%) scale(1);
                  height: 260px;
                }
              }
            }
          }
        `}
      />
    </>
  );
};
