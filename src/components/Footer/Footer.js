import React from "react";
import "./style.css"

function Footer() {
    return (
        <nav class="navbar navbar-light bg-light" className="footer">
            <form class="form-inline">
                
                <a href="https://docs.google.com/document/d/1zEHHsR94dFLY3kME3sGDhOF8sNKa5rylqKIpr-LVNdg/edit"><button className="button" type="button">Resume</button></a>

                <a href="joshuamaney.github.com"><button className="button" type="button">Github</button></a>

                <a href="https://www.linkedin.com/in/josh-maney-8177a3203/"><button className="button" type="button">LinkedIn</button></a>

                <a href="mailto:joshuaraymaney@gmail.com"><button className="button" type="button">E-mail</button></a>
                
                <a href="tel:8285777080"><button className="button" type="button">Telephone</button></a>
            </form>
        </nav>
    )
}

export default Footer;