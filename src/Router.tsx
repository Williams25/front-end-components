import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./App";
import ButtonPage from "./pages/ButtonPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button-page" element={<ButtonPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
