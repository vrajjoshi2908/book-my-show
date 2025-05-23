import React,{Component} from 'react'
import MovieNavbar from "../components/NavBar/MovieNavbar.Component"

const MovieLayout = 
(Component) => 
({...props}) => 
 
   {
    return ( 
      <div>
        <MovieNavbar/>
      <Component{...props}/>
      <div>Footer</div>
      </div>
    )
  }
 

export default MovieLayout
