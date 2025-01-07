import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Create from "./pages/Create.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <div className="dark text-foreground bg-[#0f172a]">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </div>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
