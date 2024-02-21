import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Theme>
   <App />
   <ThemePanel />
  </Theme>
 </React.StrictMode>
);
