import React, { Fragement } from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ({ dishes }) => (
  <Grid container>
    <Grid item xs={12}>
      <Paper style={style.paper}>
        {dishes.map(([group, dishes]) => 
          <Typography variant='headline'>
            {group}
          </Typography>
        )}
      </Paper>
    </Grid>

    <Grid item xs={12}>
      <Paper style={style.paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);
