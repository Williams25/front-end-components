import styles from "./styles.module.css";
import { Code } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

type CardProps = {
  variant_color_icon:
    | "#4eb7ff"
    | "#fd6494"
    | "#43f390"
    | "#ffb508"
    | "#37ba82"
    | "#cd57ff";
  title: string;
  description: string;
  path: string;
};

export const Card = ({
  variant_color_icon = "#4eb7ff",
  description,
  title,
  path,
}: CardProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceBox}>
      <div className={styles.icon} style={{ background: variant_color_icon }}>
        <span>{title}</span>
        <Code fontSize="large" />
      </div>
      <div className={styles.content}>
        <h2>{description}</h2>
        <button onClick={() => navigate(path)}>ver component</button>
      </div>
    </div>
  );
};
