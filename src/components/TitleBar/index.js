import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
  
import Resources, { logo } from '../../Resources';

import './TitleBar.css';

const TitleBar = (props) => {  
    
    return (
      <div className="top-navbar">
        <img src={logo} alt="Logo" />
      </div>
    );
  }
  export default TitleBar;
  