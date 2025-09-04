import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./ui/root"
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)