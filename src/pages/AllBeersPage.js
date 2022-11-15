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
    <div className="col-10">
      <div className="list-group">
        {
          beers.map((beer) => {
            return (


              <Link to={`/beers/${beer._id}`} key={beer._id} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <img src={beer.image_url} alt={beer.name} style={{ maxWidth: "10%" }} />
                  <h5 className="mb-1">{beer.name}</h5>
                </div>
                <p className="mb-1">{beer.tagline}</p>
                <small>Create by {beer.contributed_by}</small>
              </Link>
            )
          })
        }
      </div >
    </div >
  );
}

export default AllBeersPage;


