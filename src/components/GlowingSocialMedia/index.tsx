import { Content } from "./styles";
import { YouTube } from "@material-ui/icons";

export const GlowingSocialMedia = () => {
  return (
    <Content>
      <ul className="contentSocialMedia">
        <li>
          <a href="#">
            <YouTube fontSize="large" />
          </a>
        </li>
      </ul>
    </Content>
  );
};
