import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes=()=> {

let auth=localStorage.getItem('login')

  return (
      auth ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes;