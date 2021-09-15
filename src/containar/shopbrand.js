import React from 'react'
 import classes from './shopbrand.module.css'
 import bgimg from "../assets/images/image4.png";

export const Shopbrand = () => {
    return (
        <div class="flex  bg-black w-full ">
           <div  class={`${classes.div1} text-white `}>
                <h1 className={` text-4xl`}>
                    Shop Brand
                </h1>
                <p class="text-sm mt-10">
                     Explore the hottest brands from growing <br></br> entrepreneurs within our platform. 
                </p>

                <button class= {`${classes.button1}  mt-10`}>
                    Explore
                </button>
                
            </div>  
           
                
            <div class="px-40 py-12 "> 
            <img className={classes.image1} src={bgimg} alt="Italian Trulli" />
            </div>
            
        </div>
    )
} 
