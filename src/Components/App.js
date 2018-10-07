import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Content from "./Content";
import { allergies, dishes } from "../data";

export default class extends Component {
  state = {
    dishes,
    dish: {}
  };

  getDishesByAllergy() {
    const initAllergies = allergies.reduce(
      (dishes, allergy) => ({
        ...dishes,
        [allergy]: []
      }),
      {}
    );

    console.log(allergies, initAllergies);

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
      dish: dishes.find(_dish => _dish.id === id)
    }));
  };

  handleDishCreate = dish => {
    this.setState(({ dishes }) => ({
      dishes: [...dishes, dish]
    }));
  };

  handleDishDelete = id => {
    this.setState(({ dishes }) => ({
      dishes: dishes.filter(_dish => _dish.id !== id)
    }));
  };

  render() {
    const dishes = this.getDishesByAllergy(),
      { category, dish } = this.state;

    return (
      <Fragment>
        <Header allergies={allergies} onDishCreate={this.handleDishCreate} />

        <Content
          dish={dish}
          dishes={dishes}
          category={category}
          onSelect={this.handleDishSelect}
          onDelete={this.handleDishDelete}
        />

        <Footer
          allergies={allergies}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
