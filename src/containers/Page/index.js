import React from "react";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "../../contexts/GlobalContext";
import Header from "../../components/Header";

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

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Container className="layout">
          <Header className="header" />
          <main className="main-container">{children}</main>
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default Page;
