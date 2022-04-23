import './App.css';
import React from 'react';
import Home from './Components/Home';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const api = "http://localhost:5000"
  return (
    <BrowserRouter>
    
    <Routes> 
          <Route exact path='/' element={<Home api ={api}/>}></Route> 
          <Route exact path='/createmeal' element={<Create api ={api}/>}></Route>
          <Route exact path='/meals' element={<Read api ={api}/>}/>
          <Route path='/update' element={<Update api ={api}/>}/>
    </Routes>         
    
 
    </BrowserRouter>
  );

}

export default App;
