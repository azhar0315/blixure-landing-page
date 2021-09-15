import React from "react";
import cssclassNamees from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faCoffee , faUniversalAccess} from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
<div>
    <div className= {` ${cssclassNamees.header1} flex space-x-72 py-4 px-10 w-full fixed z-50`} >
      <div>
        <nav className=" flex space-x-12">
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
      </div>
      <div>
        {/* <input  type="text" id="fname" name="fname"  placeholder="search"></input> */}
        <input
          className="shadow appearance-none border rounded-full h-7  w-80 px-5 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search"></input>

        {/* <input className="  shadow appearance-none border rounded-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="search"></input> */}
      </div>

      <div>
        <nav className=" flex space-x-4">
          <a className=" hover:text-red-800" href="">
            Login
          </a>
          <a className=" hover:text-red-800" href="">
            Contant us
          </a>
        </nav>
      </div>
    
    </div>
  </div>
  );
};
