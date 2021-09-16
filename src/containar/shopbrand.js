import React from 'react'
 import classNamees from './shopbrand.module.css'
 import bgimg from "../assets/images/image4.png";
 
export const Shopbrand = () => {
    return (
        <div className="lg:flex items-center bg-black  ">
           <div  className={` pl-52 pt-16  text-white `}>
                <h1 className="text-4xl ">
                    Shop Brand
                </h1>
                <p className="text-sm mt-10">
                     Explore the hottest brands from growing <br></br> entrepreneurs within our platform. 
                </p>

                <button className= {`${classNamees.button1}  mt-10`}>
                    Explore
                </button>
                
            </div>  
           
                
            <div className=" px-40 py-12 "> 
            <img className={classNamees.image1} src={bgimg} alt="Italian Trulli" />
            </div>
            
        </div>
    )
} 
