import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeersDetailsPage(id) {
  const [beers, setBeers] = useState([]);
  const { beerId } = useParams();
  useEffect(() => {
    async function fetchBeer() {

       if (id.id==="random"){
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
       setBeers(response.data);     
       }
       else {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
       setBeers(response.data);    

       }

    }
    fetchBeer();
  },[beerId, id.id]);

  return (
    <div>

      <img src={beers.image_url} alt={beers.name} />
      <h2>{beers.name}</h2>
      <p>{beers.tagline}</p>
      <p>{beers.first_brewed}</p>
      <p>{beers.attenuation_level}</p>
      <p>{beers.description}</p>
      <p>Create by {beers.contributed_by}</p>

    </div>
  );
}

export default BeersDetailsPage