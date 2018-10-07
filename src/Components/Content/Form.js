import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitialState();

    getInitialState() {
      const { dish } = this.props

      return dish ? dish : {
        title: "",
        description: "",
        allergies: ""
      }
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = () => {
      // TODO: add validation

      const { dish } = this.state;
      this.props.onSubmit({
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
      const { title, description, allergies } = this.state,
        { classes, allergies: categories } = this.props;
      return (
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
            <Select value={allergies} onChange={this.handleChange("allergies")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
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
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            Create
          </Button>
        </form>
      );
    }
  }
);
