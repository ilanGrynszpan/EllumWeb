import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge } from 'react-bootstrap';
import TitleBar from '../../../components/TitleBar';
import InstructionsTable from '../../../components/InstructionsTable';
import OurAdvantages from '../../../components/OurAdvantages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Resources, { urls } from '../../../Resources';

import './HomeCreditOnly.css';
import InstructiionsTable from '../../../components/InstructionsTable';

export default () => {

    let header_options = [
        {
            name:"Home",
            destination: "/"
        }
    ]
  
    return (
      <div className="home-page">
            <TitleBar option={header_options} />

            <section className='chamada'>
                <h1>Bem-vind@ a Ellum</h1>
            </section>

            <section className='descricao'>
                <h2>Trazemos o crédito que suas campanhas de marketing digital precisam</h2>
            </section>

            <section className='instrucoes'>
                <InstructiionsTable />
            </section>

            <section className="cta" style={{backgroundColor:"#7DC7D0"}}>
                <h5>Clique no botão se você tem uma empresa com presença digital</h5>
                <a href={urls.form_companhias}>
                    <Button variant="primary">Pedir crédito</Button>
                </a>
            </section>

            <section className="cta" style={{backgroundColor:"#C5DADC"}}>
                <h5>Clique no botão se você é uma pessoa gestora de tráfego</h5>
                <a href={urls.form_gestores_trafego}>
                    <Button variant="primary">Pedir crédito</Button>
                </a>
            </section>

            <section className='parceiros'>
                <OurAdvantages />
            </section>

            <section className='footer'>
                <p>Ícones por <a href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a></p>
            </section>
      </div>
    );
  }