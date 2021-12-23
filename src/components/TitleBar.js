import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
  


const TitleBar = (props) => {  
    
    return (
      <div className="top-navbar" style={{backgroundColor:"#F4F4F4"}}>
        <Navbar collapseOnSelect expand="md" sticky="top" style={{backgroundColor:"#F4F4F4" }}>
          <Container fluid>
          <Navbar.Brand href="/">
              <h1 style={{color:"#1F5F30"}}>{props.nb_title}</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="me-auto">
                {
                  props.option.map((value, index) => {
                    return(
                      <Nav.Link href={value.destination}>{value.name}</Nav.Link>
                    );
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    );
  }
  export default TitleBar;
  