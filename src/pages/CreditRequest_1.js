import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge } from 'react-bootstrap';
import TitleBar from '../components/TitleBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function CreditRequest1() {
    return (
      <div className="credit-request-1">
            
            <Container fluid>
                <Row className="mt-4">
                    <Col>
                        <h4 style={{color:"#1F5F30"}}>
                        Oba! Sua jornada conosco está só começando. 
                        </h4>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <p style={{color:"#1F5F30"}}>
                        Para se candidatar precisamos te conhecer um pouco melhor. 
                        </p>
                    </Col>
                </Row>

                <Row className="mt-4 w-200" style={{backgroundColor:"#BFED87"}}>
                    <Col>
                        <h4 style={{color:"#1F5F30"}}>
                        Clique na opção correta abaixo
                        </h4>
                    </Col>
                </Row>

                <Row className="m-5">
                    <Col>
                        <Link to="/formcompany">
                            <Button style={{backgroundColor:"#BFED87"}}>
                                <h3 style={{color:"black"}}>
                                Sou uma empresa digital ou com presença digital
                                </h3>
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className="m-5">
                    <Col>
                        <Link to="/trafficmanager">
                            <Button style={{backgroundColor:"#BFED87"}}>
                                <h3 style={{color:"black"}}>
                                Sou uma pessoa gestora de tráfego
                                </h3>
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className="m-5">
                    <Col>
                        <Link to="/">
                            <a href="/">
                                Voltar
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
      </div>
    );
  }