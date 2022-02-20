/* eslint-disable @next/next/no-img-element */
import { GitHub, Twitter, Mail } from "@material-ui/icons";
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
                <GitHub />
              </a>
            </li>
            <li className={"twitter"}>
              <a href={twitter}>
                <Twitter />
              </a>
            </li>
            <li className={"mail"}>
              <a href={email}>
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Content>
  );
};
