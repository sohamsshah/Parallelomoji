import React, { useState } from "react";
import "./App.css";
import emojiDictionary from "./emojipedia";
import Card from "./components/Card/Card";
const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/en/0/03/Emojipedia_logo.png"
        ></img>
        <h1>
          {" "}
          Parallelo<span className="heading-design">mojipedia</span>
        </h1>
        <input
          onChange={changeHandler}
          className="input"
          placeholder="Enter your emoji here"
        ></input>
        <span>
          <button className="search-form__button" aria-label="search">
            🔍
          </button>
        </span>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            padding: "2rem",
            justifyContent: "center"
          }}
        >
          <div style={{ paddingRight: "2.5rem" }}>
            <Card emoji={emoji} meaning={meaning} />
          </div>
          <div style={{ paddingLeft: "2.5rem" }}>
            <Card emoji={emoji} meaning={meaning} />
          </div>
        </div>
        <h2> Some Common Emojis </h2>
        {emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
