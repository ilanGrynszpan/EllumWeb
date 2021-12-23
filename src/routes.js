import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeCreditOnly from "./pages/home/HomeCreditOnly";
import CreditRequest1 from "./pages/CreditRequest_1"

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route component = { HomeCreditOnly }  path="" exact />
           <Route component = { HomeCreditOnly }  path="/" exact />
           <Route component = { CreditRequest1 }  path="/pedircredito" />
        </Routes>
       </BrowserRouter>
   )
}

export default Routes;