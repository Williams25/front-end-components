import { SyntaxHighlighter } from "..";
import { useShowTsxAndCss } from "src/hooks/useShowTsxAndCss";
import { Container } from "./styles";

type ShowTsxAndCssProps = {
  css: string;
  tsx: string;
};

export const ShowTsxAndCss = ({ css, tsx }: ShowTsxAndCssProps) => {
  const { showTsx, showCss, handleShowTsx, handleShowCss } = useShowTsxAndCss();
  return (
    <Container style={{ marginBottom: showTsx || showCss ? "2rem" : 0 }}>
      <div className="contentButton">
        <button
          onClick={handleShowTsx}
          className={showTsx ? "activeButton" : ""}
        >
          ver tsx
        </button>
        <button
          onClick={handleShowCss}
          className={showCss ? "activeButton" : ""}
        >
          ver css
        </button>
      </div>
      {showTsx && (
        <SyntaxHighlighter code={tsx} language={"tsx"} showLineNumbers={true} />
      )}

      {showCss && (
        <SyntaxHighlighter code={css} language={"css"} showLineNumbers={true} />
      )}
    </Container>
  );
};
