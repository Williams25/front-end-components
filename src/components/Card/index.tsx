import { Content } from "./styles";
import { Code } from "@material-ui/icons";

export type CardProps = {
  variant_color_icon:
    | "#4eb7ff"
    | "#fd6494"
    | "#43f390"
    | "#ffb508"
    | "#37ba82"
    | "#cd57ff";
  description: string;
  title: string;
};

export const Card = ({
  variant_color_icon = "#4eb7ff",
  description,
  title
}: CardProps) => {
  return (
    <Content>
      <div className={"serviceBox"}>
        <div className={"icon"} style={{ background: variant_color_icon }}>
          <Code fontSize="large" />
        </div>
        <div className={"content"}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Content>
  );
};
