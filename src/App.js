
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./componenets/Home"
import Navbar from './componenets/Navbar';
function App() {
  return (
    <div className="App">
     
     
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
       
        </Routes>
      
     </div>
    </div>
  );
}

export default App;
