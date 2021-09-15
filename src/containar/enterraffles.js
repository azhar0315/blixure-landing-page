import React from 'react'
import bgimg from '../assets/images/image6.png'
import classes from './enterraffles.module.css'

export const Enterraffles = () => {
    return (
        <div class="flex bg-black">
             <div class="px-10 py-12 align-center"> 
                 <img className={classes.image1} src={bgimg} alt="Italian Trulli" />
            </div>

            <div  class={`${classes.div1} text-white `}>
                <h1 className={` text-4xl`}>
                         Enter Raffles
                </h1>
                <p class="text-sm mt-10">
                     Win different prizes by entering into lucky draw. 
                </p>

                <button class= {`${classes.button1}  mt-10`}>
                    Enter Draw
                </button>
                
            </div>  
            
        </div>
    )
}
