import React from "react";
import { AppBar, Tabs, withWidth } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default withWidth()(({ allergies, category, onSelect, width }) => {
  const index = category
    ? allergies.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (event, index) => {
    onSelect(index === 0 ? "" : allergies[index - 1]);
    localStorage.setItem("darkTheme", false);
    console.log(localStorage.getItem("darkTheme"));
  };

  return (
    <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== 'xs'}
        scrollable={width === 'xs'}
      >
        <Tab label="All" />
        {allergies.map(group => <Tab key={group} label={group} />)}
      </Tabs>
    </AppBar>
  );
});
