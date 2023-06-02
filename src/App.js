import React from "react";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";
import './App.css';
import data from "./data.js";


function App() {
 
  //console.log({...data[0]});
  const cardComponents=data.map((obj)=>{
    return (
<Card
//  link={obj.link} 
//  description={obj.description} 
//  rate={obj.rate}count={obj.count} 
//  price={obj.price}
 {...obj}
 /> 
 
    )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="card-components">

      {cardComponents} 
      </div>
    </div>
  )
     }

export default App;
