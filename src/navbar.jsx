import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { navdataContext } from './login';
import Logo from './images/logo.jpg';
import './App.css';



export default function Nav_bar() {
  // Get user data from the context
  const user = useContext(navdataContext);

  return (
    <div id="welcome">
      {/* Navbar Component */}
      <Navbar id="header">
        <img src={Logo} className="img1" alt="Logo" />
        <h4 id="head">Maggie</h4>
        <Container>
          <Nav className="nav">
            <Nav.Link href="#home" id="nav-bar">Home</Nav.Link>
            <Nav.Link href="#register" id="nav-bar">Register</Nav.Link>
            <Nav.Link href="#deposit" id="nav-bar">Deposit</Nav.Link>
            <Nav.Link href="#cashback" id="nav-bar">Withdraw</Nav.Link>
            <Nav.Link href="#alldata" id="nav-bar">AllData</Nav.Link>
            {user === "hi" && ( // Example condition: Display different links for the "admin"
              <Nav.Link href="#admin" id="nav-bar">Admin Panel</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
