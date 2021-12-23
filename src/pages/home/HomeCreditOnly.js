import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge } from 'react-bootstrap';
import TitleBar from '../../components/TitleBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function HomeCreditOnly() {
    let nb_option = [
        {
            "name":"Página inicial",
            "destination":"/"
        }, 
        {
            "name":"Pedir crédito",
            "destination":"pedircredito"
        }
    ]
  
    return (
      <div className="home-page">
            <TitleBar
                nb_title="ellum"
                option={nb_option}
            />
            <Container fluid>
                <Row className="mt-4">
                    <Col>
                        <h4 style={{color:"#1F5F30"}}>
                            O seu negócio digital precisa de crédito fácil, rápido e seguro!
                        </h4>
                    </Col>
                </Row>

                <Row className="mt-4 w-200" style={{backgroundColor:"#BFED87"}}>
                    <Col>
                        <h4 style={{color:"#1F5F30"}}>
                            Encontre aqui o empréstimo para alavancar suas campanhas de marketing digital
                        </h4>
                    </Col>
                </Row>

                <Row className="m-5">
                    <Col>
                        <Link to="/pedircredito">
                            <Button style={{backgroundColor:"#BFED87"}}>
                                <h3 style={{color:"black"}}>
                                    Clique aqui para iniciar seu pedido de crédito
                                </h3>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
      </div>
    );
  }