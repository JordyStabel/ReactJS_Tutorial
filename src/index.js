import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const isDarkTheme = true;
localStorage.setItem("darkTheme", isDarkTheme);
console.log(localStorage.getItem("darkTheme"));

function toggleTheme() {
  isDarkTheme: !isDarkTheme;
  localStorage.setItem("darkTheme", isDarkTheme);
}

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
  <MuiThemeProvider
    theme={
      localStorage.getItem("darkTheme") === "true" ? darkTheme : lightTheme
    }
  >
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
