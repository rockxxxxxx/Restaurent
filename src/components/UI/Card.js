import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import "./Card.css";

const items = [
  {
    id: "1",
    title: "Sushi",
    description: "Finesh Fish and veggie",
    price: "$40",
  },
  {
    id: "2",
    title: "Schnitzel",
    description: "A german speciality",
    price: "$16.50",
  },
  {
    id: "3",
    title: "Barbeque Burger",
    description: "Ameriacn Raw Meat",
    price: "$12.99",
  },
  {
    id: "4",
    title: "Green Bowl",
    description: "Healthy and tasty",
    price: "$28.75",
  },
];

export default function Card() {
  const cartContextHandler = useContext(CartContext);
  function addCartHandler(item) {
    cartContextHandler.update(item);
  }
  return (
    <div className="cardList container">
      <div className="ui middle aligned divided list">
        {items.map((item) => {
          return (
            <div className="item itemParent" key={item.id}>
              <div className="right floated content">
                <form>
                  <select className="ui dropdown">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  &nbsp;&nbsp;
                  <div
                    className="ui brown button"
                    onClick={() => addCartHandler(item)}
                  >
                    + Add
                  </div>
                </form>
              </div>
              <h4>
                <b>{item.title}</b>
                Amount
              </h4>
              <p className="itemDesc">{item.description}</p>
              <p className="itemPrice"> {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
