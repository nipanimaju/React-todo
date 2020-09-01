import React, { useContext } from 'react';
import  { Link } from "react-router-dom"
import "./Nav.scss"
import ThemeToggler from '../themeToggler/ThemeToggler';
import ThemeContext from '../../context/ThemeContext'
import bulboff from '../../img/bulboff.png'
import bulbon from '../../img/bulbon.png'


const Nav = () => {
  const context = useContext(ThemeContext);
  const isDark = context[0] === 'dark' ? true : false;
  return (
    <nav>
        <ul className="styleUL">
            <Link className="styleA" to='/'><li className="styleLi">Home</li></Link> 
            <Link className="styleA" to='/impressum'><li className="styleLi">Impressum</li></Link>
            <Link className="styleA" to='/help'><li className="styleLi">Help</li></Link>
            <ThemeToggler>{isDark ?   <img 
                src={bulbon}
                style={ {width:"30px", margin:"auto", display:"block"}}
                alt={"alt"}
                />
                : 
                <img 
                src={bulboff}
                style={ {width:"30px", margin:"auto", display:"block"}}
                alt={"alt"}
                /> 
            }</ThemeToggler>
        </ul>
    </nav>
  );
}

export default Nav;