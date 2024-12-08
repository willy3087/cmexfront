import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { SessionProvider } from "./auth/SessionContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <SessionProvider>
        <div>
          <div className="max-w-4xl mx-auto">
            <App />
          </div>
        </div>
      </SessionProvider>
    </React.StrictMode>
  );
}
