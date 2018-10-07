import React, { Fragment } from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

const style = {
  paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: "auto"
  },
  orderButton: {
    flex: 1,
    background: "green"
  },
  dishItem: {
    padding: 20,
    height: "auto",
    margin: 10,
    overflowY: "auto"
  },
  categroyWrapper: {
    padding: 20,
    height: "auto",
    margin: 10,
    overflowY: "auto"
  }
};

export default ({
  dishes,
  category,
  onSelect,
  dish: {
    id,
    title = "Welcome!",
    description = "Please select a dish from the list on the left"
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
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
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
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12}>
      <Paper style={style.dishItem}>
        <Typography variant="display1">Naam van het gerecht...</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          Beschrijving van het gerecht...
        </Typography>
      </Paper>
    </Grid>

    {/*Generated items form 'database'*/}
    <Grid item xs={12}>
      {dishes.map(
        ([group, dishes]) =>
          !category || category === group ? (
            <Paper style={style.categroyWrapper}>
              <Fragment key={group}>
                <Typography variant="headline">{group}</Typography>
                {dishes.map(({ id, title, description }) => (
                  <Paper style={style.dishItem}>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Typography variant="display1">{title}</Typography>
                        <Typography
                          variant="subheading"
                          style={{ marginTop: 20 }}
                        >
                          {description}
                        </Typography>
                      </div>
                      <div
                        style={{
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <Button variant="fab" color="primary">
                          <Add />
                        </Button>
                      </div>
                    </div>
                  </Paper>
                ))}
              </Fragment>
            </Paper>
          ) : null
      )}
    </Grid>
  </Grid>
);
