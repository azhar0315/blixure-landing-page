import React , { useState } from "react";
import cssclassNames from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faCoffee , faUniversalAccess,faBars} from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const [menu, setmenu] = useState(false)

  const onOpenMenu = () => {
    console.log('hello world')
    setmenu(true)
    if(menu === true){
      setmenu(false)
    }

  }
  console.log(menu)
  return (
<div>
    {/* <div className= {` ${cssclassNamees.header1} flex space-x-72 py-4 px-10 w-full fixed z-50`} > */}
    <div className= {` ${cssclassNames.header1} justify-between py-4 px-5 w-full fixed z-50 hidden sm:flex `} >
      
        <nav className=" flex-none sm: space-x-2  md:space-x-3 lg:space-x-6 ">
          <a className=" hover:text-blue-800" href="#" href="">
            Home
          </a>
          <a className=" hover:text-blue-800" href="#" href="">
            Shop Brand
          </a>
          <a className=" hover:text-blue-800" href="#" href="">
            Service
          </a>
          <a className=" hover:text-blue-800" href="#" href="">
            Sell with Bilxur
          </a>
        </nav>
      
      
        <input
          className=" flex-shrink-w-30  shadow appearance-none border rounded-full h-7 md:w-48 lg:w-80 px-5 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search"></input>

    

      
        <nav className=" flex-none sm:space-x-2  md:space-x-3 lg:space-x-6 ">
          <a className=" hover:text-red-800" href=""> 
            Login
          </a>
          <a className=" hover:text-red-800" href="">
            Contant us
          </a>
        </nav>
  
    
    </div>
      <div className= {` ${cssclassNames.header1} flex align-items justify-between sm:hidden px-8 py-4`}>
          <input
            className="shadow appearance-none border rounded-full h-7  w-50 px-5 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search"></input>

            <FontAwesomeIcon   icon={faBars} size="2x"  style={{cursor:"pointer"}} onClick={onOpenMenu}  />

        </div>
            {
                 menu === true ? 
                 
                 <div className="relative min-h-screen flex">
                        {/* mobile nav bar */}
            
                    <div className="bg-black text-white w-64 py-7 px-2 sm:hidden">
                    
                      <nav> 
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded "> Home</a>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded "> Shop Brand</a>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded"> Services</a>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded"> Sell with Bilxur</a>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded"> Login</a>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded"> Contact us</a>
                      </nav>
                      </div>
               
                     </div> : ""
            }
               
    </div>

  );
};
