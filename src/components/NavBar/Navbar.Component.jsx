import React from "react";
import { BiChevronDown,BiMenu,BiSearch } from "react-icons/bi";

function NavSm(){
    return (
        <>
        <div className="text-white flex items-center justify-between">
        <div>
            <h3 className="text-xl font-bold">It All Starts Here !!</h3>
        <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
             Vadodara<BiChevronDown/></span>
        </div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full text-white"/>
        </div>
        </div>
        </>
    )
}
function NavMd(){
    return (
        <>
        <div className="w-10 h-8 flex mt-2 shrink-0 items-center ">
     <img 
       src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
       alt="logo" 
     className="w-full h-full"
           />
        </div>
        <div className="w-full flex items-center gap-3
         bg-white px-3 py-1 rouded-md m-2 
          hover:border-gray-300 hover:border-2 rounded-md">
        <BiSearch/>
        <input 
      type="search" className="w-full bg-transparent border-none focus:outline-none" 
      placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
        </div>
        </> 
    )
}

function NavLg(){
    return (
        <>
        <div className="w-10 h-10 flex mx-0 shrink-0 items-center">
     <img 
     src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
    alt="logo" 
    className="w-full h-full content-center mx-4"/>
        </div>
        <div className="container flex mx-auto  gap-3  px-4 justify-between w-3/4  hover:border-gray-300 hover:border-2 rounded-md">
        <div className="flex items-center w-1/2 gap-3">
        
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md ">
        <BiSearch/>
        <input 
      type="search" className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md hover:border-none focus:outline-none" 
      placeholder="Search for Movies, Events, Plays, Sports and Activities" />

        </div>
    </div>
         </div>
        <div className="flex items-center gap-3">
            <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">Vadodara
                <BiChevronDown/>
                </span>
     <button className="bg-red-600 text-white px-2 py-1 text-sm rounded ">Sign In</button>
     <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/>
     </div>
        </div>
        </>
    )
}
const Navbar = () => {
    return (
        <nav className="bg-darkBackground-700 px-4 py-3">
            {/* This is For Mobile Screen - Navbar */}
            <div className="md:hidden">
                <NavSm />
            </div>
            {/* This is For Tab Screen - Navbar */}
            <div className="hidden md:flex lg:hidden">
                <NavMd />
            </div>
            {/* This is For Large Screen - Navbar */}
            <div className="hidden md:hidden lg:flex">
                <NavLg />
            </div>
                
        </nav>
        )
    
}

export default Navbar;