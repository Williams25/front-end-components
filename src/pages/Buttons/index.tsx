import { Button, GlowingSocialMedia } from "src/components";
import styles from "src/styles/Buttons/styles.module.css";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <Button variant="button-dark" title="Button" />
      <GlowingSocialMedia />
    </div>
  );
};

export default Buttons;
