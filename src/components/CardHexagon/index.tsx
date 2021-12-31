import styles from "./styles.module.css";
import { ShowTsxAndCss } from "..";

type CardHexagonProps = {
  image: string;
  title: string;
  description: string;
};

export const CardHexagon = ({
  description,
  image,
  title,
}: CardHexagonProps) => {
  return (
    <>
      <div className={styles.hexagon}>
        <div className={styles.shape}>
          <img src={image} alt={title} />

          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <ShowTsxAndCss
        tsx={`import styles from "./styles.module.css";

type CardHexagonProps = {
  image: string;
  title: string;
  description: string;
};

export const CardHexagon = ({
  description,
  image,
  title,
}: CardHexagonProps) => {
  return (
    <>
      <div className={styles.hexagon}>
        <div className={styles.shape}>
          <img src={image} alt={title} />

          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
      `}
        css={`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,800;0,900;1,700&display=swap");

          .hexagon {
            font-family: "Poppins", sans-serif;
            position: relative;
            width: 350px;
            height: 400px;
            margin: 50px 20px 70px;
            transition: 0.5s;
          }

          .hexagon::before {
            content: "";
            position: absolute;
            bottom: -70px;
            width: 100%;
            height: 60px;
            background: radial-gradient(
              rgba(0, 0, 0, 0.15),
              transparent,
              transparent
            );
            border-radius: 50%;
            transition: 0.5s;
          }

          .hexagon:hover::before {
            opacity: 0.8;
            transform: scale(0.8);
          }

          .hexagon:hover {
            transform: translateY(-30px);
          }

          .hexagon .shape {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: blueviolet;
            clip-path: polygon(
              0 25%,
              50% 0,
              100% 25%,
              100% 75%,
              50% 100%,
              0 75%
            );
            transition: 0.5s;
          }

          .hexagon .shape img {
            width: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }

          .hexagon .shape .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px;
            text-align: center;
            background: linear-gradient(45deg, #03a9f4, rgba(3, 169, 244, 0.5));
            color: #fff;
            opacity: 0;
            transition: 0.5s;
          }

          .hexagon:hover .shape .content {
            opacity: 1;
          }

          .hexagon .shape .content h2 {
            margin: 0;
          }

          .hexagon .shape .content p {
            margin: 0;
          }
        `}
      />
    </>
  );
};
