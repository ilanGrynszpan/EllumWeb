import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCreditOnly from './pages/home/HomeCreditOnly';

function App() {
   
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<HomeCreditOnly />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
