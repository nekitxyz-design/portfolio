import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NekitXyz } from "./screens/NekitXyz/NekitXyz";
import { KrewGuruPage } from "./screens/KrewGuru/KrewGuruPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NekitXyz />} />
        <Route path="/krewguru" element={<KrewGuruPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
