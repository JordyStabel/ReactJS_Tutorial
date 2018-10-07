import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Content/Create";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default ({ allergies, onDishCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Restaurant Menu
      </Typography>
      <FormControlLabel
        control={
          <Switch
            // Call function that switches the darktheme
            // onChange={}
            value="checkedB"
            color="secondary"
          />
        }
        label=""
      />
      <CreateDialog allergies={allergies} onCreate={onDishCreate} />
    </Toolbar>
  </AppBar>
);
