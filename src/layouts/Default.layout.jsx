import React,{Component}from "react";
import Navbar from "../components/NavBar/Navbar.Component"

const DefaultLayout = 
(Component) => 
   ({...props}) => {
    return (
      <div>
        <Navbar/>
        <Component {...props} />
        <div>Footer</div>
      </div>
    )
  }


export default DefaultLayout
