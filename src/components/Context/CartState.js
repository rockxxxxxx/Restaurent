import { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  const s = [];
  const [cartItem, setCartItem] = useState(s);
  function update(cartItem) {
    console.log(cartItem);
    setCartItem((data) => {
      return [...data, cartItem];
    });
  }
  return (
    <CartContext.Provider value={{ s: s, cartItem: cartItem, update: update }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
