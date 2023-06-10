import React from "react";
import Login from './component/Login'
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import NotFound from './component/NotFound'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PrivateRoutes/>}>
               <Route element={<Home/>} path="/home" exact/>
               <Route element={<About/>} path="/about" exact/>
               <Route element={<Contact/>} path="/contact" exact/>
          </Route>
          <Route path="/" element={<Login />}></Route> 
          <Route path="*" element={<NotFound/>}></Route>  
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;