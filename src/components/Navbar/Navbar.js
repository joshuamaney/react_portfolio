import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        
        <nav class="navbar navbar-light bg-light" className="nav">
            <form class="form-inline">
                <Link to="/" className={window.location.pathname === "/"}><button className="button" type="button">Home</button></Link>
                <Link to="/About" className={window.location.pathname === "/About"}><button className="button" type="button">About</button></Link>
                <Link to="/Projects" className={window.location.pathname === "/Projects"}><button className="button" type="button">Projects</button></Link>
            </form>
        </nav>
    )
}

export default Navbar;