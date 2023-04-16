import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './App.css';
import Device from './Pages/Device';

import Gateway from './Pages/Gateway';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route index element = {<Gateway/>}/>
    <Route  path  = "device" element = {<Device/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
