import React, { useState, useEffect } from "react";
import "./App.css";
import ImageDiv from "./components/ImageDiv";


function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>NASA's Picture of the Day</h1>
        <p>By: Jared Wyatt</p>
        <hr></hr>
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <ImageDiv />
    </div>
  );
}

export default App;
