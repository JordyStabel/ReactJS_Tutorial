import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Content/Dialogs/Create";

export default ({ allergies, onDishCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Restaurant Menu
      </Typography>

      <CreateDialog allergies={allergies} onCreate={onDishCreate} />
    </Toolbar>
  </AppBar>
);
