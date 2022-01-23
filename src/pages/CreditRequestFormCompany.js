import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge, InputGroup, FormControl } from 'react-bootstrap';
import TitleBar from '../components/TitleBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function CompanyInformationForm() {

    const questions = [
        "Nome da Empresa",
        "CNPJ",
        "Website (caso não possua deixe em branco)",
        "Tipo de empresa",
        "Instagram (caso não possua deixe em branco)",
        "Tipo de empresa",
        "Quando abriu sua empresa?",
        "Você recebeu aporte financeiro de algum fundo ou Venture Capital?",
        "Quanto a sua empresa tem em caixa hoje?",
        "Quais meios de pagamento você aceita em seu negócio?",
        "Em quais canais de marketing investiu nos últimos 3 meses?",
        "Qual a média do seu investimento em marketing digital nos últimos 3 meses?",
        "Qual a média de investimento em marketing digital planejado para os próximos 3 meses?",
        "Qual a média do seu faturamento nos últimos 3 meses?",
        "Qual o valor de empréstimo que você esta buscando para sua empresa?",
        "Qual o seu ROI? (Para cada real que você investe em marketing digital, quantos reais você faz em vendas?)"
    ]

    return (
      <div className="credit-request-form-company">
            
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
                        <Link to='/companyuserprofile'>
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