import React from 'react'
import bgimg from "../assets/images/image7.png"
import classes from './contactus.module.css'

export const Contactus = () => {
    return (
        <div class="flex bg-black w-full">
            <div class={`${classes.div1} text-white`}>
                <h1 class="text-4xl">
                    Contact Us
                </h1>
                <p class="text-sm mt-10">
                    Just send us yours questions
                </p>
                <button class={`${classes.button1} mt-10`}>
                    Contact
                </button>

            </div>
            <div class="pl-96 py-12 ">
                <img className={ classes.image1} src={bgimg} alt="Italin Trulli"/>
            </div>
            
        </div>
    )
}
