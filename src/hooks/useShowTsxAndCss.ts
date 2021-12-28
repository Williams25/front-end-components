import { useState } from "react";

export const useShowTsxAndCss = () => {
  const [showTsx, setShowTsx] = useState<boolean>(false);
  const [showCss, setShowCss] = useState<boolean>(false);

  const handleShowTsx = () => {
    setShowCss(false);
    setShowTsx((show) => !show);
  };
  const handleShowCss = () => {
    setShowTsx(false);
    setShowCss((show) => !show);
  };

  return {
    showTsx,
    showCss,
    handleShowTsx,
    handleShowCss,
  };
};
