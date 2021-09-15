import React from 'react'
import bgimg from '../assets/images/image8.png'

export const Brandgrowth = () => {
    return (
        <div class ="flex bg-black w-full ">
            <div class="text-white pl-8 w-4/12 mt-8" >
                <h1 class="text-4xl">
                    Brand Growth
                </h1>
                <p class=" mt-8" >
                Blixur helps to spared your brand to new customers <br></br>
                  who have never been to your stores ever 
                </p>
                <h1 class=" text-2xl mt-10">
                    Grow your mailing list
                </h1>
                <p class="text-sm mt-8">
                      Collect customer email and allow them to<br></br> opt into your marketing emails when they <br></br>book an appointment.
                </p>

                <h1 class=" text-2xl mt-10">
                     Stand out in any inbox
                </h1>
                <p class="text-sm mt-8">
                      Easily create stunning emails with powerful<br></br> editing tools and customizable layouts.
                </p>

                <h1 class=" text-2xl mt-10">
                        Stay top-of-mind
                </h1>
                <p class="text-sm mt-8">
                Build relationships with your customers by <br></br>sending them a discount or letting them <br></br>know about an upcoming class.
                </p>
                


            </div>
            <div class="mt-20">
                <img src={bgimg} alt="Italian Trulli"/>
            </div>

            
        </div>
    )
}
