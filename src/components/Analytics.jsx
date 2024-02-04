import React from "react";
import Laptop from '../assests/laptop.jpg';
const Analytics = () =>{
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="Laptop pic" />
                <div className="p-6 flex flex-col justify-center">
                <p className="text-[#00df9a] font-medium font-xl">DATA ANALYTICS DASHBOARD</p>
                <h1 className="font-bold md:text-4xl sm:text-3xl text-xl my-3">Manage Data Analytics Centrally</h1>
                <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque vitae quibusdam quasi perspiciatis molestias libero, laboriosam, voluptatum aspernatur nobis illo impedit sapiente eligendi, tempora repellat quaerat numquam in Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos amet aliquid, nisi dolore voluptatum rerum dicta perferendis ipsa est saepe cupiditate quibusdam unde id? Praesentium a eum repudiandae nostrum laudantium.</p>
                <button className="bg-black sm:w-[250px] font-medium rounded-md my-6 mx-auto sm:py-3 p-4 text-[#00df9a] sm:text-xl transition-transform transform hover:scale-110 w-[150px] h-auto text-lg"> Get Started </button>
            </div>
            </div>
        </div>
    )
}

export default Analytics;