import React from 'react';
import  { Link } from "react-router-dom"
import "./Nav.scss"


const Nav = () => {
  return (
    <nav>
        <ul className="styleUL">
            <Link className="styleA" to='/'><li className="styleLi">Home</li></Link> 
            <Link className="styleA" to='/impressum'><li className="styleLi">Impressum</li></Link>
            <Link className="styleA" to='/help'><li className="styleLi">Help</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;