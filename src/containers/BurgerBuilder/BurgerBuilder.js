import React, { Component } from "react";

import Aux from "../../hoc/Aux.js";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";
import Modal from "../../components/UI/Modal/Modal.js";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      });
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];
    const updatedIngredientCount = oldIngredientCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredientCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const udpatedPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: udpatedPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  subtractIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];
    if (oldIngredientCount <= 0) return;
    const updatedIngredientCount = oldIngredientCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredientCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const udpatedPrice = oldPrice - priceSubtraction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: udpatedPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    console.log("running?");
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continue!");
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientSubtracted={this.subtractIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordering={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
