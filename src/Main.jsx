import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { DataContext, DataProvider } from "./app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
