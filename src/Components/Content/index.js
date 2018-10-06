import React, { Fragment } from "react";
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
    margin: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({ dishes }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.paper}>
        {dishes.map(([group, dishes]) => (
          <Fragment>
            <Typography variant="headline">{group}</Typography>
            <List component="ul">
              {dishes.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={style.paper}>
        <Typography variant="display1">Welcome!</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          Please select a dish from the list on the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
