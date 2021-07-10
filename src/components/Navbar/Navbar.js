import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Projects" className={window.location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
                    </li>
          
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;