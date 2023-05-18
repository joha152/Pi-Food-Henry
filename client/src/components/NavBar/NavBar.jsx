import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"


const NavBar = ()=>{

    return(
        <>
        <nav className={style.nav}>
            <div>
              <div>
            <NavLink to="/">
              <button className={style.button}>Foods</button>           
            </NavLink>   

             
              </div>

            </div>
            
        <NavLink to="/home">
        <button className={style.button}>
              Home
          </button>
        </NavLink>
      
      <NavLink to="/create">
        <button className={style.button}>Create recipe</button>
      </NavLink>
        </nav>
        </>
    )

}


export default NavBar;