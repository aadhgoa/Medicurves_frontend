import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button'

const About = () => {
    
  return (
    <>

<div className='text-center '>
<Navbar/>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    


    <h2 style={{ fontWeight: 'bold' ,color: "#FFDB58",marginRight:276,textDecorationLine: 'underline',textDecorationColor:"#000000",textDecorationThickness:"1.5px", }}>ABOUT US</h2>
    <h4 style={{color:"#000000" ,marginLeft:390,fontWeight:"lighter",fontSize:"13.5px",textAlign:"left" }}>The objective of this project is to develop an AI model that can generate synthetic MRI scans<br></br> of subjects with a diverse collection of characteristics</h4>
    <div className=  "position-fixed top-10 start-10 translate-middle "style={{ width:100}}> 
    <img src="https://scx1.b-cdn.net/csz/news/800a/2019/26-brain.jpg" style={{maxWidth:400,borderRadius: 10000}} alt="" />
    </div>
    <br></br>
    <Button variant="primary" className='col-lg-50 d-flex justify-content-center' onClick={""} style={{ background: "black",width:150,marginLeft:400,borderRadius: 5}} type="submit">
                             <div style={{color: "#FFDB58"}} > Read More </div>  
                            </Button>
    </div>
    </>
  )
}

export default About