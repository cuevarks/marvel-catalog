import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#525252",
      main: "#2D2D2D",
      dark: "#1C1C1C",
      contrastText: "#CCCCCC",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
