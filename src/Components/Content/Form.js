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
      const { dish } = this.props;

      return dish
        ? dish
        : {
            title: "",
            description: "",
            allergies: ""
          };
    }

    componentWillReceiveProps({ dish }) {
      this.setState({
        ...dish
      });
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = () => {
      // TODO: add validation

      this.props.onSubmit({
        // Create an ID from the title, replacing spaces with '-'
        id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
        ...this.state
      });

      // Reset the state and close the pop-up
      this.setState(this.getInitialState());
    };

    render() {
      const { title, description, allergies } = this.state,
        { classes, dish, allergies: categories } = this.props;
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
            {dish ? "Edit" : "Create"}
          </Button>
        </form>
      );
    }
  }
);
