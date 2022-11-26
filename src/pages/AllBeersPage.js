import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('')
  const [reload, setReload] = useState(false)

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get("https://ironbeer-api.fly.dev/");
      //   console.log(response.data)
      setBeers(response.data);
    }
    fetchBeers();
  }, []);
  // console.log(beers)

  function handleReload() {
    setReload(!reload)
  }

  async function handleChange(e) {
    const searchs = [];
    setQuery(e.target.value)
    let search = e.target.value
    const response = await axios.get(`https://ironbeer-api.fly.dev/search?q=${search}`)

    setBeers(response.data)
    handleReload()
  }


  return (
    <div>
      <input name="query" value={query} onChange={handleChange} type="text" placeholder="Digite o nome da cerveja" />


      <div className="col-10">
        <div className="list-group">
          {
            beers.map((beer) => {
              return (


                <Link to={`/beers/${beer._id}`} key={beer._id} className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <img src={beer.image} alt={beer.name} style={{ maxWidth: "10%" }} />
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
    </div >
  );
}

export default AllBeersPage;


