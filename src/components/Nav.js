import React from 'react';
import  { Link } from "react-router-dom"

const styleUL = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "50vw",
    height: "5vh",
    marginBottom: "20px",
    background: "#038203"
    
}
const styleLi = {
    display: "inline",
    marginRight: "20px",
}
const styleA = {
    textDecoration: "none",
    color: "white"
}

const Nav = () => {
  return (
    <nav>
        <ul style={styleUL}>
            <Link style={styleA} to='/'><li style={styleLi}>Home</li></Link> 
            <Link style={styleA} to='/impressum'><li style={styleLi}>Impressum</li></Link>
            <Link style={styleA} to='/help'><li style={styleLi}>Help</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;