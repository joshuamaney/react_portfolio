import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        
        <nav class="navbar navbar-light bg-light" className="nav">
            <form class="form-inline">
                <button className="button" type="button"><Link to="/" className={window.location.pathname === "/"}>Home</Link></button>
                <button className="button" type="button"><Link to="/Projects" className={window.location.pathname === "/Projects"}>Projects</Link></button>
            </form>
        </nav>
    )
}

export default Navbar;