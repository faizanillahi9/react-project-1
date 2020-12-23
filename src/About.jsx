import React from 'react'
import Common from './Common';
import Web from "../src/images/about.jpg";
const About=()=>{
return(
    <>
    <Common 
    name={"Welcome to about page"}
     imgsrc={Web} visit={"/contact"}
      btname={"Contact Now"}
    />
    
    </>
  )
}

export default About;