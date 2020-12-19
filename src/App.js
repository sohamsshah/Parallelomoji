import React, { useState } from "react";
import './App.css';


const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyance"
};

function App() {
  const [emoji, setEmoji] = useState(""); 
    const [meaning, setMeaning] = useState("translation will appear here..");

    function changeHandler(event) {
        const inputEmoji = event.target.value;
        setEmoji(inputEmoji);
    
        if (inputEmoji in emojiDictionary) {
          setMeaning(emojiDictionary[inputEmoji]);
        } else {
          setMeaning("failure to recognise this emoji");
        }
      }
return (
<div className="App">
<div className="header">
      <h1> Parallelo<span className="heading-design">mojipedia</span></h1>
      <input onChange={changeHandler} className="input" placeholder="Enter your emoji here"></input>
      <button className="search-form__button" aria-label="search">🔍</button>
      <h2> {emoji} </h2> 
      <h3> {meaning} </h3>
    </div>
    </div>)
}

export default App;
