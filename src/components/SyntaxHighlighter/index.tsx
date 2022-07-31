/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { CopyBlock, dracula } from "react-code-blocks";

type SyntaxHighlighterProps = {
  code: any;
  language: any;
  showLineNumbers?: boolean;
};

export const SyntaxHighlighter = ({
  code,
  language,
  showLineNumbers
}: SyntaxHighlighterProps) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      wrapLines
      codeBlock
    />
  );
};
