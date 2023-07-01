import "../App.css";
import Axios from "axios";
import { useState } from "react";
import Shoe from "../Components/Shoe";

function Home() {
  const [shoes, setShoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    Axios.get("https://the-sneaker-database.p.rapidapi.com/sneakers", {
      headers: {
        "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
      },
      params: {
        name: searchTerm,
        limit: 20,
      },
    })
      .then((response) => {
        setIsLoading(false);
        setShoes(response.data.results);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="headerContainer">
        <div className="buttonContainer">
          <input
            placeholder="Search for a Shoe"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="shoeContainer">
        {isLoading && <h1 className="loadingMssg">Fetching Soles...</h1>}
        {shoes.map((shoe) => (
          <Shoe
            key={shoe.id}
            icon={shoe.image.small}
            shoe={shoe.name}
            id={shoe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
