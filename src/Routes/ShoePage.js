import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";


function ShoePage() {
  let { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    Axios.get(`https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`, {
      headers: {
        "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
        //"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => {
        console.log(response.data); // Check the structure of the API response
        setShoe(response.data.results[0]); // Update the code based on the response structure
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  

  if (shoe) {
    return (
    
        <div>
          {shoe.image && <img src={shoe.image.small} alt="" className="" />}
          <div>
            <div>
              <h3>Symbol:</h3>
              <h3>{shoe.name}</h3>
            </div>
          </div>
          <Link to="/">
            <div>Go back</div>
          </Link>
        </div>
      

    );

  } 
  
  else {
    return null;
  }
}

export default ShoePage;
