import React from "react";
//import path from "../../public/image/airbnb-logo.png";
import "./Navbar.css"

 function Navbar(){
    return(
        <nav>
            <img src= "/image/airbnb-logo.png"alt="airbnb logo" width="100"/>
            <div>
            <a href="https://github.com/Prachi-Gore"><img src="https://img.icons8.com/fluency/48/null/github.png" alt="github"/></a>
            <a href="https://www.linkedin.com/in/prachi-gore-4772a11a5"><img src="https://img.icons8.com/color/48/000000/linkedin.png"alt="linkedin"/></a>
            </div>
                
        </nav>
    )
}
export default Navbar;