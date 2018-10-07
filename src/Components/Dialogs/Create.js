import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = { 
    open: false
  }

  render(){
    const { open } = this.state

    return
    <Fragment>
      <Button variant="fab" mini>
      </Button>
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new dish</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
        </DialogContentText>
          <Form>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Create
        </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}