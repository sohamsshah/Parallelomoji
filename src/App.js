import React, { useState } from "react";
import "./App.css";
import {emojiDictionary, getRandomEmojis, searchEmoji} from "./emojipedia";
import Card from "./components/Card/Card";
import Navbar from './components/Navbar/Navbar'
const randomEmojis = getRandomEmojis();

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");
  const [parallelEmoji, setParallelEmoji] = useState("");
  const [parallelMeaning, setparallelMeaning] = useState("...here appear will translation");
  
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    let emojiObj = searchEmoji(inputEmoji, false);
    setEmoji(emojiObj.emoji);
    let parallelEmojiObj = searchEmoji(inputEmoji, true);
    setParallelEmoji(parallelEmojiObj.emoji);
    if(emojiObj === "not found"){
      setMeaning("Invalid emoji 😅")
      setparallelMeaning("Invalid emoji 😅")
    }
    else if(emojiObj === "empty"){
      setMeaning("translation will appear here...")
      setparallelMeaning("translation will appear here...")
    }else{
      setMeaning(emojiObj.description);
      setparallelMeaning(parallelEmojiObj.description);
    }
  }
  function emojiClickHandler(inputEmoji) {
    let emojiObj = searchEmoji(inputEmoji, false);
    setEmoji(emojiObj.emoji);
    let parallelEmojiObj = searchEmoji(inputEmoji, true);
    setParallelEmoji(parallelEmojiObj.emoji);
    if(emojiObj === ""){
      setMeaning("Invalid emoji 😅")
      setparallelMeaning("Invalid emoji 😅")
    }else{
      setMeaning(emojiObj.description);
      setparallelMeaning(parallelEmojiObj.description);
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
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
          {/* <button className="search-form__button" aria-label="search">
            🔍
          </button> */}
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
            <Card emoji={emoji} meaning={meaning} parallel={false} />
          </div>
          <div style={{ paddingLeft: "2.5rem" }}>
            <Card emoji={parallelEmoji} meaning={parallelMeaning} parallel={true} />
          </div>
        </div>
        <h2> Some Common Emojis </h2>
        {randomEmojis.map((emoji) => (
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
