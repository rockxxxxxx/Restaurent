import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Layout/Navbar";
import Card from "./components/UI/Card";

function App() {
  const[cart,setCartStatus]=useState(false)
  const cartHandler = ()=>{
    setCartStatus(true)
  }
  const closeButtonHandler = ()=>{
    setCartStatus(false)
  }
  return (
    <>
      <Cart status={cart} closeButton={closeButtonHandler}>Fancy Modal</Cart>
      <Navbar cartClickHandler={cartHandler}/>
      <Card />
    </>
  );
}

export default App;
