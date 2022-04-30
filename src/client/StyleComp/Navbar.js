import React from 'react'
import '../StyleComp/NavStyle.css'; 
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
    <nav>
      <header className='navbar'> 
      <div className='navbar__title navbar__item'>Meal Sharing App</div>
      <Link to="/createmeal">
        <div className='navbar__item'>Create Reservation</div>
      </Link>
      <Link to="/meal">
        <div className='navbar__item'>Meals we offer</div>
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


