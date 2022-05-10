import React from 'react'
import '../StyleComp/FooterStyle.css'; 
import { Link } from "react-router-dom";

 const Footer= () => {
    
  return (
    <div className='main-footer'>
    <div className='container'>
    <div className='row'>
    {/*{colomn 1}*/}
    <div className='col-md-3 col-sm-6'>
    <h4>what ever 1 2</h4>  
    <ul className='list-unstyled'>
      <li>asd, asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
    </ul>
    </div>

    {/*{colomn 2}*/}
    <div className='col-md-3 col-sm-6'>
    <h4>what ever 3</h4>  
    <ul className='list-unstyled'>
      <li>asd, asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
    </ul>
    </div>

    {/*{colomn 3}*/}
    <div className='col-md-3 col-sm-6'>
    <h4>what ever 4</h4>  
    <ul className='list-unstyled'>
      <li>asd, asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
    </ul>
    </div>

    {/*{colomn 4}*/}
    <div className='col-md-3 col-sm-6'>
    <h4>what ever</h4>  
    <ul className='list-unstyled'>
      <li>asd, asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
      <li>asd ,asd</li>
    </ul>
    </div>

    

    </div>
    {/*footer-bottom*/}  
    <div className='.footer-bottom'>
    <p className='text-xs-center'>copywrite
    &copy;{/* {new Date().getFullYear} */} all rights protected
    </p>
    </div>
    </div>
    </div>

    )
}

export default Footer;




