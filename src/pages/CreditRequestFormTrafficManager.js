import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge, InputGroup, FormControl } from 'react-bootstrap';
import TitleBar from '../components/TitleBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function TrafficManagerInformationForm() {

    const questions = [
        "Nome da Empresa",
        "CNPJ",
        "Website (caso não possua deixe em branco)",
        "Instagram (seu perfil)",
        "Tipo de empresa",
        "Quando abriu sua empresa?",
        "Quando começou a trabalhar com marketing digital?",
        "Quantas empresas/ clientes contratam sua empresa atualmente?",
        "Você se especializou em algum nicho? Se sim, qual?",
        "Com quais canais de marketing você costuma trabalhar?",
        "Qual o orçamento acumulado que costuma gerir? (somatório do orçamento de todas as empresas que te contratam)",
        "Qual o seu faturamento médio nos últimos 3 meses?",
        "Os seus clientes buscam aumentar os investimentos em marketing digital nos próximos meses?",
    ]

    return (
      <div className="credit-request-traffic-manager-form">
            
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
                        <Link to='/trafficmanageruserprofile'>
                            <Button style={{backgroundColor:"#BFED87"}}>
                                <h3 style={{color:"black"}}>
                                Avançar
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