import React from "react";

import Aux from "../../../hoc/Aux.js";
import Button from "../../UI/Button/Button.js";

const orderSummary = props => {
  const ingredientSummary = Object.entries(props.ingredients).map(
    ingredient => {
      return (
        <li key={ingredient[0]}>
          <span style={{ textTransform: "capitalize" }}>{ingredient[0]}</span>:{" "}
          {ingredient[1]}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h1>Your Order</h1>
      <p>A scrumptious burger with these ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
