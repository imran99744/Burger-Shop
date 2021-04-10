import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "../Components/Orders/Orders";
import Checkout from "../Components/Orders/Checkout/Checkout";
import { Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <div className="container">
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route exact to path="/" component={BurgerBuilder} />
      </div>
    </div>
  );
}

export default Main;
