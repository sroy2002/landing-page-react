import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () =>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
                    <p className="text-[#00df9a] font-bold pt-2 sm:text-xl md:text-2xl text-base">GROWING WITH DATA ANALYTICS</p>
                    <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold font-serif md:py-3 mb-0">Grow with data.</h1>
                    <div className="flex justify-center items-center sm:mb-2">
                        <p className="md:text-4xl sm:text-3xl text-xl font-bold pr-2">Fast, flexble financing for </p>
                        <ReactTyped className="md:text-4xl sm:text-3xl text-xl font-bold text-gray-500 " strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
                    </div>
                    <p className="md:text-2xl text-lg font-bold text-gray-500 px-7">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                    <button className="bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black text-xl transition-transform transform hover:scale-110"> Get Started</button>
            </div>
        </div>
    )
}

export default Hero;