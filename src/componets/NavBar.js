import { Link } from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
import { useLocation } from 'react-router-dom';

function NavBar() {

  const location = useLocation();
  if (location.pathname === '/') {
    return (<div></div>);
  }


  return (
      
        <navbar className="container-xxl navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <Link to="/" class="navbar-brand"><VscHome /></Link>
          </div>
        </navbar>
     
  );
}


export default NavBar;
