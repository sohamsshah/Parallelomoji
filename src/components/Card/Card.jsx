import React from "react";
import Emoji from "../Emoji/Emoji";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <h2>
        {(!props.parallel)? "In our Universe" : "In Parallel Universe"} 
        </h2>
        <Emoji emoji={props.emoji} />
        {props.meaning}
      </div>
    </div>
  );
}
