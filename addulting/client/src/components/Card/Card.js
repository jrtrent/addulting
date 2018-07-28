import React from "react";

const Card = props => (
  <div className="card text-center">
    <div className="card-header">
      <h2>My Tasks</h2>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
);

export default Card;
