import React from "react";
import './home.css'
import HomeService from './HomeService'
import About from "../about/About"
import Service from "../service/Services"
import Project from "../projects/project/Project"


export default function App() {
  return (
   <div>
       <div  className="hero">
          <h1>Design Driven Development Your Web Products.</h1>
          <HomeService/>
      </div>

       <About/>
       <Service/>
       <Project/>

   </div>

    
  );
}
