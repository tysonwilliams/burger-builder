import React from "react";

import Aux from "../../../hoc/Aux.js";

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
