import { Button } from "../../components/Button";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const ButtonPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Button
        variant="button-dark"
        title="Button"
        onClick={() => navigate("/")}
      />

      <Button
        variant="button-secondary"
        title="Button"
        onClick={() => navigate("/")}
      />

      <Button
        variant="button-primary"
        title="Button"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default ButtonPage;
