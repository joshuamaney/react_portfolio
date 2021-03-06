import React from "react";
import profilePhoto from "../images/profilePhoto.jpeg"

function About() {
    return (
    <div className="container py-3">
      <div className="row">
          <div className="col">
            <h4 className="card-title">About Josh:</h4>
          <p className="card-text">
          Full stack developer in training with over a decade of team leadership skills in a wide variety of settings.
          </p>
          <p className="card-text">
          Hailing from Western North Carolina, my passions include coding, playing guitar, vintage video gaming, and the culinary arts.
          </p>
        </div>
        <div className="col">
          <img
            className="bd-placeholder-img"
            width="auto"
            height="300"
            src={profilePhoto}
            alt="one happy-lookin' dude"
          ></img>
        </div>
      </div>
    </div>
  );

}

export default About;