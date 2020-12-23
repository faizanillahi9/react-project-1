import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Web from "../src/images/home.jpg";
const Home=()=>{
return(
    <>
    <Common 
    name={"Grow your Business with "}
     imgsrc={Web} visit={"/service"}
      btname={"Get Started"}
    />
    </>
  )
}

export default Home;