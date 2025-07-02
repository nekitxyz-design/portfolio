import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NekitXyz } from "./screens/NekitXyz/NekitXyz";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <NekitXyz />
  </StrictMode>,
);
