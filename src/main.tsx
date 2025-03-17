import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Create from "./pages/Create.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Success from "./pages/Sucess.tsx";
import WebsiteDetail from "./pages/Website/WebsiteDetail.tsx";
import Cancel from "./pages/Cancel.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HeroUIProvider>
          <div className="dark text-foreground bg-[#0f172a]">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="create" element={<Create />} />
              <Route path="/success/:id" element={<Success />} />
              <Route path="/cancel/:id" element={<Cancel />}></Route>
              <Route path="/website/:id" element={<WebsiteDetail />} />
            </Routes>
          </div>
        </HeroUIProvider>
      </BrowserRouter>
    </QueryClientProvider>

);
