import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DatePickerDiv = styled.div`
  display: block;
  text-align: center;
`;

function DatePicker({selectedDate, setSelectedDate}) {
  return (
    <DatePickerDiv
      selected={selectedDate}
    >
      <input type="date" onChange={(event) => setSelectedDate(event.target.value)} name="pictureDate"></input>
    </DatePickerDiv>
  );
}

export default DatePicker;
