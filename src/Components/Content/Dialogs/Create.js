import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      dish: {
        title: "",
        description: "",
        allergies: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        dish: {
          ...this.state.dish,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      // TODO: add validation

      const { dish } = this.state;
      this.props.onCreate({
        ...dish,
        // Create an ID from the title, replacing spaces with '-'
        id: dish.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      // Reset the state and close the pop-up
      this.setState({
        open: false,
        dish: {
          title: "",
          description: "",
          allergies: ""
        }
      });
    };

    render() {
      const {
          open,
          dish: { title, description, allergies }
        } = this.state,
        { classes, allergies: categories } = this.props;

      return (
        <Fragment>
          <Button variant="fab" onClick={this.handleToggle} mini>
            <Add />
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">Create new dish</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="allergies">Allergies</InputLabel>
                  <Select
                    value={allergies}
                    onChange={this.handleChange("allergies")}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  multiline="true"
                  rows="4"
                  label="Description"
                  value={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
