import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge, InputGroup, FormControl } from 'react-bootstrap';
import TitleBar from '../components/TitleBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function TrafficManagerUserProfile() {

    const questions = [
        "Nome completo",
        "CPF",
        "E-mail",
        "Telefone para contato",
        "Cargo na empresa (caso se aplique)"
    ]

    return (
      <div className="credit-request-1">
            
            <Container fluid>
                <Row className="mt-4">
                    <Col>
                        <h4 style={{color:"#1F5F30"}}>
                        Preencha abaixo com algumas informações sobre o seu negócio
                        </h4>
                    </Col>
                </Row>

                {
                    questions.map((value, index) => {
                        return(
                            <Row className="mt-4">
                                <Col>
                                    <InputGroup className="mb-3">
                                            <FormControl
                                            placeholder={value}
                                            aria-label={value}
                                            aria-describedby={value}
                                            />
                                    </InputGroup>
                                </Col>
                            </Row>
                        );
                    })
                }

                <Row className="m-5">
                    <Col>
                        <Link to='/'>
                            <Button style={{backgroundColor:"#BFED87"}}>
                                <h3 style={{color:"black"}}>
                                Finalizar
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