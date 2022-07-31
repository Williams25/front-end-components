/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";

type CardGlassProps = {
  github: string;
  twitter: string;
  email: string;
  image: string;
  title: string;
  subTitle: string;
};

export const CardGlass = ({
  email,
  github,
  image,
  subTitle,
  title,
  twitter
}: CardGlassProps) => {
  return (
    <>
      <Content>
        <div className={"card"}>
          <div className={"imgBx"}>
            <img src={image} alt={title} />
          </div>

          <div className={"content"}>
            <div className={"contenBx"}>
              <h3>
                {title} <br /> <span>{subTitle}</span>
              </h3>
            </div>

            <ul className={"sci"}>
              <li className={"github"}>
                <a href={github}>
                  <FaGithub />
                </a>
              </li>
              <li className={"twitter"}>
                <a href={twitter}>
                  <FaTwitter />
                </a>
              </li>
              <li className={"mail"}>
                <a href={email}>
                  <HiMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Content>
      <ShowTsxAndCss
        tsx={`
      export const CardGlass = ({
        email,
        github,
        image,
        subTitle,
        title,
        twitter
      }: CardGlassProps) => {
        return (
          <div className={"card"}>
            <div className={"imgBx"}>
              <img src={image} alt={title} />
            </div>

            <div className={"content"}>
              <div className={"contenBx"}>
                <h3>
                  {title} <br /> <span>{subTitle}</span>
                </h3>
              </div>

              <ul className={"sci"}>
                <li className={"github"}>
                  <a href={github}>
                    <FaGithub />
                  </a>
                </li>
                <li className={"twitter"}>
                  <a href={twitter}>
                    <FaTwitter />
                  </a>
                </li>
                <li className={"mail"}>
                  <a href={email}>
                    <HiMail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      };
      `}
        css={`
          .card {
            font-family: "Poppins", sans-serif;
            width: 300px;
            height: 380px;
            margin: 20px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border-radius: 15px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
          }

          .card .imgBx img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .card .content {
            position: absolute;
            bottom: -160px; /****/
            left: 0;
            width: 100%;
            height: 160px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 10;
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: bottom 0.5s;
            transition-delay: 0.8s;
          }

          .card:hover .content {
            bottom: 0;
            transition-delay: 0s;
          }

          .card .content .contenBx h3 {
            color: #fafafafa;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            margin: 20px 0 15px;
            line-height: 1.1em;
            transition: 0.5s;
            opacity: 0;
            transform: translateY(-20px);
            transition-delay: 0.6s;
          }

          .card:hover .content .contenBx h3 {
            opacity: 1;
            transform: translateY(0);
          }

          .card .content .contenBx h3 span {
            font-size: 12px;
            font-weight: 300;
            text-transform: initial;
          }

          .card .content .sci {
            position: relative;
            bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }

          .card .content .sci li {
            list-style: none;
            margin: 0 10px;
            transform: translateY(40px);
            opacity: 0;
            transition: 0.5s;
          }

          .card .content .sci .github {
            transition-delay: calc(0.2s * 1);
          }

          .card .content .sci .twitter {
            transition-delay: calc(0.2s * 2);
          }

          .card .content .sci .mail {
            transition-delay: calc(0.2s * 3);
          }

          .card:hover .content .sci li {
            transform: translateY(0);
            opacity: 1;
          }

          .card .content .sci li a {
            color: #fafafa;
            font-size: 24px;
          }
        `}
      />
    </>
  );
};
