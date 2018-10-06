import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default ({ allergies, category, onSelect }) => {
  const index = category
    ? allergies.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (event, index) => {
    onSelect(index === 0 ? "" : allergies[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {allergies.map(group => <Tab key={group} label={group} />)}
      </Tabs>
    </Paper>
  );
};
