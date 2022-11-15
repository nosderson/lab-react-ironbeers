import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/");
      //   console.log(response.data)
      setBeers(response.data);
    }
    fetchBeers();
  }, []);
  // console.log(beers)
  return (
    <div>
      {
        beers.map((beer) => {
          return (
         
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>

                <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <small>Create by {beer.contributed_by}</small>

              </Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default AllBeersPage;


