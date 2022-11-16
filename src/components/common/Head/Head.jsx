import React from "react";
import { NavLink } from "react-router-dom";
import "./head.css";

export default function Head() {
  return (
    <div className="head">
      <div className="left_head">
         <i class="fa-solid fa-envelope"></i>
         <label htmlFor="">Sumitsangamsnp@gmail.com</label>  
         <i class="fa-solid fa-phone"></i>
        <label htmlFor="">+ 91 9834960553</label>
      </div>
      <div className="right_head">
          <NavLink><i class="fa-brands fa-facebook"></i></NavLink>
          <NavLink to="https://www.linkedin.com/in/ashish-kumar-0441a31aa/" target="_blank" ><i class="fa-brands fa-linkedin"></i></NavLink>
          <NavLink to="https://www.instagram.com/sumit.sangam.564/" target="blank" ><i class="fa-brands fa-instagram"></i></NavLink>
          <NavLink><i class="fa-brands fa-twitter"></i></NavLink>
          <NavLink><i class="fa-brands fa-github"></i></NavLink>
      </div>
    </div>
  );
}
