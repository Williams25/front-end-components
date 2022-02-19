import { Button, AnimateText } from "src/components";
import styles from "src/styles/Buttons/styles.module.css";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <Button variant="button-dark" title="Button" />
      <AnimateText />
    </div>
  );
};

export default Buttons;
