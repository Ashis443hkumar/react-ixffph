import React from 'react';
import './project.css';
import { useState } from 'react';
import Sdata from './Sdata';
export default function App() {

  const [products, setProducts] = useState(Sdata);

  const filter = (cateItem) =>{
    const updatedata = Sdata.filter((currElm) =>{
      return currElm.category === cateItem;
    })
    setProducts(updatedata)
  }

  return (
    <>
    <div className="button">
      <button className="active" onClick={() => setProducts(Sdata)} >All Projects</button>
       <button onClick={() => filter('website')} >Web Design</button>
       <button onClick={() => filter('Logo Design')} >Logo Design</button>
       <button onClick={() => filter('Mobile App')} >Mobile App</button>
    </div>
      <div className="filter">
        {products.map((val) => (
          <div className="card" key={val.id}>
            <img src={val.cover} alt="sdfdsf" />
            <p>{val.title}</p>
            <a href="">{val.desc}</a>
          </div>
        ))}
      </div>
    </>
  );
}
