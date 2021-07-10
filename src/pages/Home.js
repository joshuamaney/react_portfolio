import React from "react";
import background from "../images/background.jpeg"

function Home() {
    return (
        <img class="displayed"
            width="100%"
            height="100%"
            src={background}
            alt="psycho-delic!"
          ></img>
  );
}

export default Home;