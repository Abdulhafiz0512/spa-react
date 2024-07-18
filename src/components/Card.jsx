import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <div className="bottom">
        <div className="left">
          <p>Minimal Bedroom</p>
          <h4>Decor / Artchitecture</h4>
        </div>
        <div className="right">
          <button><img src="/public/btn.svg" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
