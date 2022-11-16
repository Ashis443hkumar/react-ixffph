import React from "react";
import { NavLink } from "react-router-dom";
import './about'
export default function App() {
  return (
   <div className="about">
     <div className="aboutimg">
       <img src="https://imroz.rainbowit.net/assets/images/about/about-1.png" alt="fg" />
     </div>
     <div className="abouttext">
          <i class="fa-sharp fa-solid fa-paper-plane"></i>
          <h2>Refreshingly Unique Company About.</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
          <div>
             <NavLink>PURCHASE IMROZ</NavLink>
          </div>
     </div>
      
    </div>
    


    
  );
}
