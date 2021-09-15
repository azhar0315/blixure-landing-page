import React from 'react'
import classes from './bookservice.module.css'
import bgimg from "../assets/images/image5.png";

export const Bookservice = () => {
    return (
        <div class="flex  bg-black w-full ">
        <div  class={`${classes.div1} text-white`}>
             <h1 className={` text-4xl`}>
                 Book Service
             </h1>
             <p class="text-sm mt-10">
             Locate and schedule your own appointments with <br></br>the services in your area.                     
             </p>

             <button class= {`${classes.button1}  mt-10`}>
                     Book Now
             </button>
             
         </div>  
        
             
         <div class="px-40 py-20"> 
         <img className={classes.image1} src={bgimg} alt="Italian Trulli" />
         </div>
         
     </div>
    )
}
