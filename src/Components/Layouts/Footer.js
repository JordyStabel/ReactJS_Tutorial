import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default ({ allergies }) =>
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {allergies.map(group =>
        <Tab label={group} />
      )};
    </Tabs>
  </Paper>