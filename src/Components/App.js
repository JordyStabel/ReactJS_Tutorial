import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import { Header, Footer } from "./Layouts";
import Content from "./Content";
import { allergies, dishes } from "../data";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import darkTheme from "../themes";

export default class extends Component {
  state = {
    darkThem: false,
    dishes,
    dish: {},
    editMode: false
  };

  getDishesByAllergy() {
    const initAllergies = allergies.reduce(
      (dishes, allergy) => ({
        ...dishes,
        [allergy]: []
      }),
      {}
    );

    const _darkTheme = darkTheme;

    return Object.entries(
      this.state.dishes.reduce((dishes, dish) => {
        const { allergies } = dish;

        dishes[allergies] = [...dishes[allergies], dish];

        return dishes;
      }, initAllergies)
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleDishSelect = id => {
    this.setState(({ dishes }) => ({
      dish: dishes.find(_dish => _dish.id === id),
      editMode: false
    }));
    console.log(darkTheme);
    this.props.changeTheme();
  };

  handleDishCreate = dish => {
    this.setState(({ dishes }) => ({
      dishes: [...dishes, dish]
    }));
  };

  handleDishDelete = id => {
    this.setState(({ dishes, dish, editMode }) => ({
      dishes: dishes.filter(_dish => _dish.id !== id),
      // Check if editMode previously stored dish (in state) is equal to the selected dish
      // This is to prevent deleting a different dish, switching the currently selected state.dish editMode
      editMode: dish.id === id ? false : editMode,
      // Check if id previously stored dish (in state) is equal to the selected dish
      // This is to prevent deleting a different dish, switching the currently selected state.dish
      dish: dish.id === id ? {} : dish
    }));
  };

  handleSelectEdit = id => {
    this.setState(({ dishes }) => ({
      dish: dishes.find(_dish => _dish.id === id),
      editMode: true
    }));
  };

  handleDishEdit = dish => {
    this.setState(({ dishes }) => ({
      dishes: [...dishes.filter(_dish => _dish.id !== dish.id), dish],
      dish
    }));
  };

  render() {
    const dishes = this.getDishesByAllergy(),
      { category, dish, editMode } = this.state;

    return (
      <MuiThemeProvider theme={darkTheme}>
        <Fragment>
          {/*CssBaseline handles the different baselin css browsers have, to make it more consitant across multiple different browsers*/}
          <CssBaseline />

          <Header allergies={allergies} onDishCreate={this.handleDishCreate} />

          <Content
            dish={dish}
            dishes={dishes}
            category={category}
            editMode={editMode}
            allergies={allergies}
            onSelect={this.handleDishSelect}
            onDelete={this.handleDishDelete}
            onSelectEdit={this.handleSelectEdit}
            onEdit={this.handleDishEdit}
          />

          <Footer
            allergies={allergies}
            category={category}
            onSelect={this.handleCategorySelect}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
