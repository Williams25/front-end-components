import { SyntaxHighlighter } from "..";
import styles from "./styles.module.css";
import { useShowTsxAndCss } from "src/hooks/useShowTsxAndCss";

type ShowTsxAndCssProps = {
  css: string;
  tsx: string;
};

export const ShowTsxAndCss = ({ css, tsx }: ShowTsxAndCssProps) => {
  const { showTsx, showCss, handleShowTsx, handleShowCss } = useShowTsxAndCss();
  return (
    <div style={{ width: "600px" }}>
      <div className={styles.contentButton}>
        <button onClick={handleShowTsx}>ver tsx</button>
        <button onClick={handleShowCss}>ver css</button>
      </div>
      {showTsx && (
        <SyntaxHighlighter code={tsx} language={"tsx"} showLineNumbers={true} />
      )}

      {showCss && (
        <SyntaxHighlighter code={css} language={"css"} showLineNumbers={true} />
      )}
    </div>
  );
};
