import React, { useState } from "react";
import "./App.css";
import {emojiDictionary, getRandomEmojis} from "./emojipedia";
import Card from "./components/Card/Card";
const randomEmojis = getRandomEmojis();

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");
  const [parallelEmoji, setParallelEmoji] = useState("");
  const [parallelMeaning, setparallelMeaning] = useState("...here appear will translation");

  function searchEmoji(inputEmoji, isParallel){
    let requiredIndex = -1;
    for(var i=1; i<emojiDictionary.length; i++){
      if(emojiDictionary[i].emoji === inputEmoji){
        requiredIndex = i;
        break;
      }
    }
    if(requiredIndex === -1){
      return "" 
    }else{
    if(isParallel){
      return emojiDictionary[(requiredIndex+10)%(emojiDictionary.length)]
    }
    else{
      return emojiDictionary[requiredIndex];
    }
  }


  }

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    let emojiObj = searchEmoji(inputEmoji, false);
    setEmoji(emojiObj.emoji);
    let parallelEmojiObj = searchEmoji(inputEmoji, true);
    setParallelEmoji(parallelEmojiObj.emoji);
    if(emojiObj === ""){
      setMeaning("Not an emoji 😅")
      setparallelMeaning("Not an emoji 😅")
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
      setMeaning("Not an emoji 😅")
      setparallelMeaning("Not an emoji 😅")
    }else{
      setMeaning(emojiObj.description);
      setparallelMeaning(parallelEmojiObj.description);
    }
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
