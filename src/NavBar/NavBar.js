import React from "react";
import classes from './NavBar.module.css';

const NavBar = () =>{

    return(
        <header>
        <nav  className={classes.navbar} >
        <img src="/amazon_logo.jpg"alt="logo" />
        </nav>
        </header>
    );
}
export default NavBar;