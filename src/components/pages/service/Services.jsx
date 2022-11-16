import React from "react";
import "./service.css"
import Sdata from "./Sdata"

export default function Service() {
  return (

    <div id="service">
        <div className="heading">
            <h5>What we can do for you</h5>
            <h1>Services provide for you.</h1>
            <p>There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.</p>
        </div>
        <div className="service">
            {
              Sdata.map((val) =>(
                <div className="serviceBox">
                  {/* <img src={val.cover} alt="df" /> */}
                  <i class="fa-solid fa-house"></i>
                  <img src="" alt=""/>
                  <h2>{val.name}</h2>
                  <p>{val.desc}</p>
                </div>
              ))
            }
      </div>
    </div> 
   

    
  );
}
