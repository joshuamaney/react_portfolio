import React, { Component } from "react";
import projects from "../utils/projects";

class Projects extends Component {
  state = {
    projects,
  };
    
  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: "center", textDecoration: "underline", color: "pink"}}>Click images to visit the deployed pages!</h1>
      {this.state.projects.map((project) => (
        
      <div className="card mb-3" style={{ borderStyle: "solid", margin: "15px" }}>
        <div className="row">
            <div className="col-md-4">
              <a a href={project.website}>
                <img 
                  className="bd-placeholder-img"
                  width="600px"
                  height="333px"
                  alt={project.title}
                  src={project.image}
                  ></img>
              </a>
            </div>
            <div className="col-md-8" style={{textAlign: "center"}}>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description} </p>
                <p className="card-text">Visit the<a className="a-modal" style={{ color: "pink", textDecoration: "none"}} href={project.repository} target="_blank" rel="noreferrer"> repository</a></p>
              </div>
            </div>
          </div> 
      </div>
      ))}
      </div>
    );
  } 
}

export default Projects;