import React from "react";
import "./style.css"

function Footer() {
    return (
        <div class="navbar">
            <div class="container-fluid" className="footer">
                <a class="navbar-brand" href="https://docs.google.com/document/d/1zEHHsR94dFLY3kME3sGDhOF8sNKa5rylqKIpr-LVNdg/edit">Resume</a>
            </div>
            <div class="container-fluid" className="footer">
                <a class="navbar-brand" href="joshuamaney.github.com">Github</a>
            </div>
            <div class="container-fluid" className="footer">
                <a class="navbar-brand" href="https://www.linkedin.com/in/josh-maney-8177a3203/">LinkedIn</a>
            </div>
            <div class="container-fluid" className="footer">
                <a class="navbar-brand" href="mailto:joshuaraymaney@gmail.com">E-mail</a>
            </div>
            <div class="container-fluid" className="footer">
                <a class="navbar-brand" href="tel:8285777080">Telephone</a>
            </div>
        </div>
    )
}

export default Footer;