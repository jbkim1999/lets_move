import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
