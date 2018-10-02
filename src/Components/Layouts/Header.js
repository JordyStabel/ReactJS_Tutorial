import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default Header =>
 <AppBar position="static">
   <Toolbar>
      <Typography variant="headline" color="inherit">
        Some random text Header
      </Typography>
   </Toolbar>
 </AppBar>