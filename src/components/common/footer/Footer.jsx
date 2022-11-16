import React from "react";
import './footer.css'
import { NavLink } from "react-router-dom"
export default function Footer() {

  const year = new Date().getFullYear()
  console.log(year)
  return (
    <>
          <div className="footer">
       
       <div className="">
         <img src="https://imroz.rainbowit.net/assets/images/logo/logo-light.png" alt="" /> 
         <p>Copyright © 2022 Imroz React Template.<br/> Built with love in Bangladesh All rights reserved.</p>
       </div>
       <div className="">
           <h1>Quick Link</h1>
           <ul>
             <li><NavLink>Portfolio</NavLink></li>
             <li><NavLink>About</NavLink></li>
             <li><NavLink>Our Blog</NavLink></li>
             <li><NavLink>Our Team</NavLink></li>
             <li><NavLink>Contact</NavLink></li>
           </ul>
       </div>
       <div className="">
           <h1>Company</h1>
           <ul>
             <li><NavLink>Portfolio</NavLink></li>
             <li><NavLink>About</NavLink></li>
             <li><NavLink>Our Blog</NavLink></li>
             <li><NavLink>Our Team</NavLink></li>
             <li><NavLink>Contact</NavLink></li>
           </ul>
       </div>
       <div className="footer-info">
           <h1>Say Hello</h1>
           <p>Email: admin@example.com</p>
           <p>Email: hr@example.com</p>
           <p>Phone: 01957485123</p>
           <div className="footer-social">
               <span><i class="fa-brands fa-twitter"></i></span>
               <span><i class="fa-brands fa-facebook"></i></span>
               <span><i class="fa-brands fa-linkedin"></i></span>
               <span><i class="fa-brands fa-instagram"></i></span>
           </div>
       </div>
      
    </div>

       <div className="tfooter">
           <p>  If you're familiar with the JavaScript ecosystem, React,  code and@ 1996 - {year} and React Router v6 with lots of</p>
       </div>
     </>

  );
}
