import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "../Components/Orders/Orders";
import Checkout from "../Components/Orders/Checkout/Checkout";
import { Route } from "react-router-dom";
import Auth from "../Components/Auth/Auth";

function Main() {
  return (
    <div>
      <Header />
      <div className="container">
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Auth} />
        <Route exact to path="/" component={BurgerBuilder} />
      </div>
    </div>
  );
}

export default Main;
