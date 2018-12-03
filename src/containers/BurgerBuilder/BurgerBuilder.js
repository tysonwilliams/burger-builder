import React, { Component } from "react";

import Aux from '../../hoc/Aux.js';
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";

const INGREDIENT_PRICES = {
  bacon: 0.5,
  salad: 0.4,
  cheese: 1.2,
  meat: 1.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
