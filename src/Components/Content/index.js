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
    overflowY: "auto"
  }
};

export default ({
  dishes,
  category,
  onSelect,
  dish: {
    id, 
    title = 'Welcome!', 
    description = 'Please select a dish from the list on the left'
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.paper}>
        {dishes.map(
          ([group, dishes]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography variant="headline">{group}</Typography>
                <List component="ul">
                  {dishes.map(({ id, title }) => (
                    <ListItem
                    key={id}
                    button 
                    onClick={() => onSelect(id)}>
                      <ListItemText
                        primary={title}
                      />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={style.paper}>
        <Typography variant="display1">
          {title}
        </Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);