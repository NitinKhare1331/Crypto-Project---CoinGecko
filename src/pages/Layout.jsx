import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navbar /> {/*This navbar is shared ui we want to have across pages */}
        <Outlet /> {/*Outlet is the actual page which will we rendered along with navbar */}
    </>
  )
}

export default MainLayout;