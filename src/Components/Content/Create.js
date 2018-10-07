import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Form from "./Form";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state,
    { allergies, onCreate } = this.props

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
            <Form 
              allergies={allergies}
              onSubmit={onCreate}/>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
