import React from "react";
import ReactDOM from "react-dom";

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
  if(props.status===false){
    return null
  }
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h4 style={{ textAlign: "left", marginTop: "0px" }}>Sushi</h4>
        <h2
          style={{ marginTop: "10px", display: "inline-block", float: "left" }}
        >
          <b>Total Amount</b>
        </h2>

        <h2
          style={{ marginTop: "10px", display: "inline-block", float: "right" }}
        >
          $500
        </h2>

        <div
          className="ui brown button"
          style={{ float: "right", marginTop: "10px", clear: "right" }}
        >
          Order
        </div>
        <div
          className="ui  button"
          style={{ float: "right", marginTop: "10px", clear: "left" }}
          onClick={()=>props.closeButton()}
        >
          Close
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
