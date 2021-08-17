import {Navbar} from 'react-bootstrap'
import "./style.css";
const Header = (props)=>(
    <Navbar className="movie-Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <div className="container" >
          <h1 className ="logo">MoviesApp</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </div>
    </Navbar>
)

export default Header;