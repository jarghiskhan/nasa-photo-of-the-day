import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ImageDiv from "./components/ImageDiv";
import DatePicker from "./components/DatePicker";

const AppWrapper = styled.div`
  text-align: center;
`;
const HeaderWrapper = styled.div`
  display: block;
  margin: 1em auto 1em auto;
  text-align: center;
  &h1,p{
    margin: .25em auto;
  }
`;



function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <h1>NASA's Picture of the Day</h1>
        <p>By: Jared Wyatt</p>
        <hr></hr>
      </HeaderWrapper>
      <ImageDiv />
    </AppWrapper>
  );
}

export default App;
