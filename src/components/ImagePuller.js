import React, {useState, useEffect} from "react";
import axios from "axios";
import "../App.css";

// `https://api.nasa.gov/planetary/apod?api_key=nHEw9GkSmWftJ9wnOkL1wB289FJUkK0Vqs4JPDbO&date=2021-06-22&thumbs=true

function ImagePuller(){
    const [pulledImageData, setPulledImageData] = useState([]);
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=nHEw9GkSmWftJ9wnOkL1wB289FJUkK0Vqs4JPDbO&thumbs=true")
        .then(response => 
            setPulledImageData(response.data))
        .catch(error => console.log("Error!", error));
    },[])
    return(
      <img src={pulledImageData.url} alt={pulledImageData.title}></img>
    );
  };

  export default ImagePuller;