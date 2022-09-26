import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <p className="nav-logo">ReactMeals</p>
        <p className="cart">
          <i
            className="fa fa-shopping-cart"
            style={{ fontSize: "20px", color: "white", paddingLeft: "30px" }}
          ></i>
          &nbsp;&nbsp;Your Cart <span className="count">0</span>
        </p>
      </div>
      <div className="mealsImage">
        <img className="mealsImage" src="meals.jpg" alt="" />
      </div>
    </>
  );
}
