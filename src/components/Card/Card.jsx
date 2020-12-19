import React from "react";
import Emoji from "../Emoji/Emoji";
import "./Card.css";

export default function Card(props) {
  return (

    <div className="card">
      <div className="container">
        <h2 className="card-title">
        {(!props.parallel)? `  In our Universe   ` : "In Parallel Universe"} 
        </h2>
        <Emoji emoji={props.emoji} />
        <h3 className="card-meaning">{props.meaning}</h3>
      </div>
    </div>
  );
}
