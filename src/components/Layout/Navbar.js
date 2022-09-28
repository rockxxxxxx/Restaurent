import React, { useContext } from "react";
import "./Navbar.css";
import CartContext from "../Context/CartContext";

export default function Navbar(props) {
  const cartItems = useContext(CartContext);
  return (
    <>
      <div className="nav">
        <p className="nav-logo">ReactMeals</p>
        <p
          className="cart"
          style={{ cursor: "pointer" }}
          onClick={() => props.cartClickHandler()}
        >
          <i
            className="fa fa-shopping-cart"
            style={{ fontSize: "20px", color: "white", paddingLeft: "30px" }}
          ></i>
          &nbsp;&nbsp;Your Cart{" "}
          <span className="count">{cartItems.cartItem.length}</span>
        </p>
      </div>
      <div className="MealsImage">
        <img className="mealsImage" src="meals.jpg" alt="" />
        <span className="card">
          <h1>Delecious Food, Delevired to you</h1>
          <p>
            Choose your favourite meals from our brand selection of available
            meals and enjoy a delecious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and ofcourse by experienced chefs!
          </p>
        </span>
      </div>
    </>
  );
}
