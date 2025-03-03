import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './home';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context'; 
import logo from'./images/logo.png'


function App() {
  return (
    <>
      <div id="welcome">
      {/* Navbar Component */}
      <Navbar id="header">
        <img src={logo} className="img1" alt="Logo" />
        <h4 id="head">Maggie</h4>
        <Container>
          <Nav className="nav">
            <Nav.Link href="#home" id="nav-bar">Home</Nav.Link>
            <Nav.Link href="#register" id="nav-bar">Register</Nav.Link>
            <Nav.Link href="#deposit" id="nav-bar">Deposit</Nav.Link>
            <Nav.Link href="#cashback" id="nav-bar">Withdraw</Nav.Link>
            <Nav.Link href="#alldata" id="nav-bar">AllData</Nav.Link>
           
            
          </Nav>
        </Container>
      </Navbar>
    </div>
     

      {/* React Router Setup */}
      <HashRouter>
        <UserProvider>
          <Routes>
           
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<Alldata />} />
          </Routes>
        </UserProvider>
      </HashRouter>
    </>
  );
}

export default App;
