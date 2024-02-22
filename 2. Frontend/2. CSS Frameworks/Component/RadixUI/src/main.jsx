import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Theme appearance="light">
   <App />
   <ThemePanel />
  </Theme>
 </React.StrictMode>
);
