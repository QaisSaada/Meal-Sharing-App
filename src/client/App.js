import './App.css';
import React from 'react';
import Home from './Components/Home';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meal from './Components/Meal';

function App() {
  const api = "process.env.DOMAIN"
  return (
    <BrowserRouter>
    
    <Routes> 
          <Route exact path='/' element={<Home api ={api}/>}></Route> 
          <Route exact path='/createmeal' element={<Create api ={api}/>}></Route>
          <Route exact path='/meal' element={<Read api ={api}/>}/>
          <Route path='/update' element={<Update api ={api}/>}/>
          <Route path='/meals/:id' element={<Meal api ={api}/>}/>
    </Routes>         
    
 
    </BrowserRouter>
  );

}

export default App;
