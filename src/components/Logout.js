import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export const Logout = () => {
  return (
    
   <h3 className='text-center col-lg-20'>Are you sure you want to LogOut?</h3>
  )
}

export default Logout