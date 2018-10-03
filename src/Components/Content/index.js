import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 5,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

function CenteredGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm>
          <LeftPane styles={style}/>
        </Grid>

        <Grid item sm>
          <RightPane styles={style} />
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Very nice dish</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Very nice dish</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Very nice dish</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Very nice dish</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Very nice dish</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
