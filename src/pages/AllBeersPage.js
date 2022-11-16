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

  function geraPalavras(word) {

    try {
      const matriz = new Array(2 ** (word.length - 1))
      for (let i = 0; i < 2 ** (word.length - 1); i++)
        matriz[i] = new Array(word.length - 1)

        for (let i = 0; i < matriz.length; i++)
        for (let j = 0; j < matriz[0].length; j++)
          matriz[i][j] = ""

          console.log(matriz)
      
        for (let i = 0; i < 2 ** (word.length - 1); i = i + 2)
        for (let j = 0; j < word.length; j++) {
                 matriz[i][j] += word[j].toLowerCase();
            matriz[i + 1][j] += word[j].toUpperCase();
        }

  
      return matriz;

    }
    catch (e) {
      const matriz = new Array(1);
      matriz[0] = new Array(1)
      matriz[0][0] = word.toLowerCase()
      matriz[0][1] = word.toUpperCase()
      return matriz;

    };

  }

  async function handleChange(e) {
    const searchs = [];
    setQuery(e.target.value)
    let search = e.target.value
    const response = await axios.get(`https://ironbeer-api.fly.dev/search?q=${search}`)
    const auxSearchs = geraPalavras(search);

    if (auxSearchs.length > 1)
      for (let i = 0; i < auxSearchs.length; i++)
        searchs[i] = auxSearchs[i].join("")

    console.log(searchs);

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


