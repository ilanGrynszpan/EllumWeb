import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCreditOnly from './pages/home/HomeCreditOnly';
import CreditRequest1 from "./pages/CreditRequest_1";
import CreditRequestFormCompany from './pages/CreditRequestFormCompany';
import CompanyUserProfile from './pages/CompanyUserProfileForm'
import TrafficManagerInformationForm from './pages/CreditRequestFormTrafficManager'
import TrafficManagerUserProfile from './pages/TrafficManagerUserProfile'

function App() {
   
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<HomeCreditOnly />}/>
          <Route path = "/pedircredito" element={<CreditRequest1 />}/>
          <Route path = "/formcompany" element={<CreditRequestFormCompany />}/>
          <Route path = "/companyuserprofile" element={<CompanyUserProfile />}/>
          <Route path = "/trafficmanager" element={<TrafficManagerInformationForm />}/>
          <Route path = "/trafficmanageruserprofile" element={<TrafficManagerUserProfile />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
