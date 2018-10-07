import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Content from "./Content";
import { allergies, dishes } from "../store";

export default class extends Component {
  state = {
    dishes,
    dish: {}
  };

  getDishesByAllergy() {
    return Object.entries(
      this.state.dishes.reduce((dishes, dish) => {
        const { allergies } = dish;

        dishes[allergies] = dishes[allergies]
          ? [...dishes[allergies], dish]
          : [dish];

        return dishes;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleDishSelected = id => {
    this.setState(({ dishes }) => ({
      dish: dishes.find(_dish => _dish.id === id)
    }));
  };

  render() {
    const dishes = this.getDishesByAllergy(),
      { category, dish } = this.state;

    return (
      <Fragment>
        <Header />

        <Content
          dish={dish}
          dishes={dishes}
          category={category}
          onSelect={this.handleDishSelected}
        />

        <Footer
          allergies={allergies}
          category={category}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}