import React from 'react'
import DashBoard from '../Views/Main/DashBoard'
import { Route, Routes } from "react-router-dom";

const  Navigation=()=> {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>

      
      
      
    </Routes>
    
  )
}
export default Navigation;
