import React, { Fragment } from "react";
  
import Resources, { logo } from '../../Resources';

import './InstructionsTable.css';

const InstructiionsTable = (props) => {  
    
    return (
      <Fragment>
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
      </Fragment>
    );
  }
  export default InstructiionsTable;
  