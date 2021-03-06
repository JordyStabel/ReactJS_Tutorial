import React, { Fragment } from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Button,
  IconButton
} from "@material-ui/core";
import { Add, Delete, Edit } from "@material-ui/icons";
import Form from "./Form";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
    margin: 5,
    overflowY: "auto"
  },
  categroyWrapper: {
    padding: 20,
    height: "auto",
    margin: 10,
    overflowY: "auto"
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    height: "calc(100% - 64px - 48px)",
    overflowY: "auto"
  }
});

export default withStyles(styles)(
  ({
    classes,
    allergies,
    dishes,
    dish,
    category,
    editMode,
    onSelect,
    dish: {
      id,
      title = "Welcome!",
      description = "Please select a dish from the list on the left"
    },
    onDelete,
    onSelectEdit,
    onEdit
  }) => (
    <Grid container className={classes.container}>
      {/*Generated items form 'database'*/}
      <Grid item xs={12}>
        {dishes.map(
          ([group, dishes]) =>
            !category || category === group ? (
              <Paper className={classes.categroyWrapper}>
                <Fragment key={group}>
                  <Typography variant="headline">{group}</Typography>
                  {dishes.map(({ id, title, description }) => (
                    <Paper className={classes.dishItem}>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          <Typography variant="display1" gutterBottom>
                            {title}
                          </Typography>
                          <Typography
                            variant="subheading"
                            style={{ marginTop: 0 }}
                          >
                            {description}
                          </Typography>
                        </div>
                        <div
                          style={{
                            margin: "auto",
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

      <Grid item sm>
        <Paper className={classes.paper}>
          {dishes.map(
            ([group, dishes]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography variant="headline">{group}</Typography>
                  <List component="ul">
                    {dishes.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)}>
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper className={classes.paper}>
          <Typography variant="display1">{title}</Typography>
          {editMode ? (
            <Form
              key={id}
              allergies={allergies}
              onSubmit={onEdit}
              dish={dish}
            />
          ) : (
            <Typography variant="subheading" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          )}
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.dishItem}>
          <Typography variant="display1">Naam van het gerecht...</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            Beschrijving van het gerecht...
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
);
