import React from 'react'
import '../StyleComp/NavStyle.css'; 
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
    <nav>
      <header className='navbar'> 
      <div className='navbar__title navbar__item'>Welcome to Meal Sharing App</div>
      <Link to="/createmeal">
        <div className='navbar__item'>Create Meal</div>
      </Link>
      <Link to="/meals">
        <div className='navbar__item'>Reservations</div>
      </Link>
      <Link to="/update">
        <div className='navbar__item'>update</div>   
      </Link>     
     </header> 
    </nav>
    </div>
  )
}

export default Navbar;


