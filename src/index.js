import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const isDarkTheme = true;

function DarkTheme(props) {
  return <h1>Welcome back!</h1>;
}

function LightTheme(props) {
  return <h1>Please sign up.</h1>;
}

function ThemeSwitch(props) {
  const isDarkTheme = props.isDarkTheme;
  if (isDarkTheme) {
    return darkTheme;
  }
  return lightTheme;
}

/*ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <ThemeSwitch isLoggedIn={true} />,
  document.getElementById("root")
);*/

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
    secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[50]
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[50]
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
