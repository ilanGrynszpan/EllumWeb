import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container, Row, Col,Button,Badge } from 'react-bootstrap';
import TitleBar from '../../../components/TitleBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Resources from '../../../Resources';

import './HomeCreditOnly.css';

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
                <h5>Conseguir seu crédito aqui é fácil</h5>

                <table>
                    <tr>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-mouse2-fill" viewBox="0 0 16 16" style={{width:"30%", height:"30%"}}>
                                <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"/>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" style={{width:"30%", height:"30%"}}>
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>                        
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style={{width:"20%", height:"20%"}}>
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>       
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1. Clique no botão abaixo que lhe represente</p>
                        </td>

                        <td>
                            <p>2. Preencha nosso formulário</p>
                        </td>

                        <td>
                            <p>3. Iremos analisar seu pedido e entramos em contato</p>
                        </td>
                    </tr>
                </table>
            </section>

            <section className="cta" style={{backgroundColor:"#7DC7D0"}}>
                <h5>Clique no botão se você tem uma empresa com presença digital</h5>
                <Button variant="primary">Pedir crédito</Button>
            </section>

            <section className="cta" style={{backgroundColor:"#C5DADC"}}>
                <h5>Clique no botão se você é uma pessoa gestora de tráfego</h5>
                <Button variant="primary">Pedir crédito</Button>
            </section>

            <section className='parceiros'>
                <h5>Somos os parceiros dos seus sonhos</h5>

                <table>
                    <tr>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{width:"20%", height:"20%"}}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16" style={{width:"20%", height:"20%"}}>
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>                 
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16" style={{width:"20%", height:"20%"}}>
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>      
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Somos tranparentes</p>
                        </td>

                        <td>
                            <p>Somos hi-tech</p>
                        </td>

                        <td>
                            <p>Somos atenciosos</p>
                        </td>
                    </tr>
                </table>
            </section>

            <section className='footer'>
                <p>Ícones por <a href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a></p>
            </section>
      </div>
    );
  }

  /*
<tr>
                            1. Clique no botão abaixo que lhe represente
                        </tr>

                        <tr>
                            2. Preencha nosso formulário
                        </tr>

                        <tr>
                            3. Iremos analisar seu pedido e entramos em contato
                        </tr>
  */