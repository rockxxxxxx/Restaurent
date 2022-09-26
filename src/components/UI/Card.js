import React from "react";
import "./Card.css";

const items = [
  {
    title: "Sushi",
    description: "Finesh Fish and veggie",
    price: "$40",
  },
  {
    title: "Schnitzel",
    description: "A german speciality",
    price: "$16.50",
  },
  {
    title: "Barbeque Burger",
    description: "Ameriacn Raw Meat",
    price: "$12.99",
  },
  {
    title: "Green Bowl",
    description: "Healthy and tasty",
    price: "$28.75",
  },
];

export default function Card() {
  return (
    <div className="cardList">
      <div className="container">
        {items.map((item) => {
          return (
            <>
              <h4>
                <b>{item.title}</b>
              </h4>
              <p className="itemDesc">{item.description}</p>
              <p className="itemPrice"> {item.price}</p>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
