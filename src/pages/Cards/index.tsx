import styles from "src/styles/Cards/styles.module.css";
import { Card, SyntaxHighlighter } from "src/components";
const Cards = () => {
  return (
    <div className={styles.container}>
      <Card variant_color_icon="#37ba82" description="Lorem ipsium" />
    </div>
  );
};

export default Cards;
