import React from "react";
import Emoji from "./../Emoji/Emoji";
import "./../Card/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <h2> In our Universe </h2>
        <Emoji emoji={props.emoji} />
        {props.meaning}
      </div>
    </div>
  );
}
