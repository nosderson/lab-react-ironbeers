import {Link} from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation} from 'react-router-dom';



function NavBar() {

  const location = useLocation();
  if (location.pathname === '/') {
    return (<div></div>);
  }
  

  return (
    <Container>
      <Link className="navbar-brand" to="/">
      <Navbar expand="lg" variant="dark" bg="primary" fixed="top">
        <Container>
          <Navbar.Brand href="#"><VscHome/></Navbar.Brand>
        </Container>
      </Navbar>
      </Link>
    </Container>
  );
}


export default NavBar;
