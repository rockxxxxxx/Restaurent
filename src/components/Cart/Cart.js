import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../Context/CartContext";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "10px",
  zIndex: 1000,
  width: "30%",
  borderRadius: "10px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Cart(props) {
  const showCartItem = useContext(CartContext);
  if (props.status === false) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {showCartItem.cartItem.map((item) => {
          return (
            <>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "0px",
                  display: "inline-block",
                  float: "left",
                }}
              >
                {item.title}
              </h4>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "0px",
                  display: "inline-block",
                  float: "right",
                }}
              >
                {item.price}
              </h4>
              <br />
            </>
          );
        })}
      </div>
    </>,
    document.getElementById("portal")
  );
}
