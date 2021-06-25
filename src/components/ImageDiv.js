import React, { useState } from "react";
import ImagePuller from "./ImagePuller";
import DatePicker from "./DatePicker";
import "../App.css";
import styled from "styled-components";

const ImageDivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto 2em;
  text-align: center;
`;

function DateToFormattedString(d) {         
                                 
  var yyyy = d.getFullYear().toString();                                    
  var mm = (d.getMonth()+1).toString();        
  var dd  = d.getDate().toString();             
                       
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
}; 

function ImageDiv() {
  const [selectedDate, setSelectedDate] = useState(DateToFormattedString(new Date()));

  return (
    <ImageDivStyle>
      <ImagePuller selectedDate={selectedDate} />
      <DatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></DatePicker>
    </ImageDivStyle>
  );
}

export default ImageDiv;
