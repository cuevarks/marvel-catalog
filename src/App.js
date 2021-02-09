import React from "react";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header.js";
import Characters from "./containers/Characters/Characters";

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
    <ThemeProvider theme={theme}>
      <Container className="layout">
        <Header className="header" />
        <main className="main-container">
          <Characters />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
