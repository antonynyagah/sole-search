import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function ShoePage() {
  let { id } = useParams();
  const [shoe, setShoe] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`, {
      headers: {
        "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
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
              <h2>{shoe.name}</h2>
              <h3>Release Date: {shoe.releaseDate === '' ? 'n/a' : shoe.releaseDate}</h3>
              <h3>MSRP: {shoe.retailPrice === 0 ? 'n/a' : shoe.retailPrice}</h3>

              <p>
        Buy now:
        {Object.entries(shoe.links).map(([key, value]) => {
          if (value) {
            return (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: '5px' }}
              >
                {key}
              </a>
            );
          }
          return null;
        })}
      </p>
            </div>
          </div>
          <button onClick={() => {navigate(`/`); }}> Go Home </button>
        </div>
      

    );

  } 
  
  else {
    return null;
  }
}

export default ShoePage;
