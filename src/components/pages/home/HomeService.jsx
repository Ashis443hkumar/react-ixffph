import React from "react";

import Sdata from './Sdata'

export default function HomeService() {
  return (
    <div className="heroService">
      {
        Sdata.map((val) =>(
          <div className="hero-box">
            <i class="fa-brands fa-servicestack"></i>
              <h4>{val.name}</h4>
              <p>{val.desc}</p>
          </div>
        ))
      }
    </div>
  );
}
