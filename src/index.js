import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[50]
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
