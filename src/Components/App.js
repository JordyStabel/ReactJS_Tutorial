import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Content from "./Content";
import { allergies, dishes } from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes };
  }

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

  render() {
    console.log(this.getDishesByAllergy());
    return (
      <Fragment>
        <Header />

        <Content dishes={ this.getDishesByAllergy()} />

        <Footer allergies={allergies} />
      </Fragment>
    );
  }
}
export default App;