import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Content/Dialogs/Create';

export default Header =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Some random text Header
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>