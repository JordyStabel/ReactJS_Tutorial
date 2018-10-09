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
  console.log("Test");
  ReactDOM.render(
    <MuiThemeProvider theme={lightTheme}>
      <App changeTheme={toggleTheme} />
    </MuiThemeProvider>,
    document.getElementById("root")
  );
}

const lightTheme = createMuiTheme({
  palette: {
    type: localStorage.getItem("darkTheme") ? "light" : "dark",
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

console.log(darkTheme);

ReactDOM.render(
  <MuiThemeProvider
    theme={
      localStorage.getItem("darkTheme") === "true" ? darkTheme : lightTheme
    }
  >
    <App changeTheme={toggleTheme.bind(this)} />
  </MuiThemeProvider>,
  document.getElementById("root")
);
