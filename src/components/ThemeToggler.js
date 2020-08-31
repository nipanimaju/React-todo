import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./themeToggler.scss"

const ThemeToggler = (props) => {
    const context = useContext(ThemeContext);
    return(
    <button 
    onClick={()=>{
       context[1](context[0] === "dark" ? "light" : "dark")
    }}
    className="toggler">
       {props.children}
    </button>
    )
}

export default ThemeToggler;