import { Link } from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
import { useLocation } from 'react-router-dom';

function Barra() {

  const location = useLocation();
  if (location.pathname === '/') {
    return (<div></div>);
  }


  return (
      
        <nav className="container-xxl navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand"><VscHome /></Link>
          </div>
        </nav>
     
  );
}


export default Barra;
