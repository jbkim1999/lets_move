import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Outlet } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import { MyProSidebarProvider } from "./pages/global/sidebarContext";
import Home from "./pages/Home"

const Layout = () => (
  <MyProSidebarProvider>
    <div className="app">
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  </MyProSidebarProvider>
);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
