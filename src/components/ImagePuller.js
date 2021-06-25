import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "../App.css";
import DatePicker from "./DatePicker";


const ImgStyled = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  margin: 20px auto;
`;

// `https://api.nasa.gov/planetary/apod?api_key=nHEw9GkSmWftJ9wnOkL1wB289FJUkK0Vqs4JPDbO&date=2021-06-22&thumbs=true

function ImagePuller({selectedDate}) {
  const [pulledImageData, setPulledImageData] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nHEw9GkSmWftJ9wnOkL1wB289FJUkK0Vqs4JPDbO&date=${selectedDate}&thumbs=true`
      )
      .then((response) => setPulledImageData(response.data))
      .catch((error) => console.log("Error!", error));
  }, [selectedDate]);
  return (
  <ImgStyled src={pulledImageData.url} alt={pulledImageData.title}></ImgStyled>  
  )
}

export default ImagePuller;
