import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        maxSnack={3}
        autoHideDuration={5000}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);