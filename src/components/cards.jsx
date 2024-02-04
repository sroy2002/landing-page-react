import React from "react";
import Single from "../assests/single.png";
import Double from "../assests/double.png";
import triple from "../assests/triple.png";
const Cards = () =>{
    return(
        <div className="bg-white text-black py-[10rem] w-full px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
                    <div className="p-8 flex flex-col items-center w-full shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mt-4 mb-3 mx-auto" src={Single} alt="" />
                        <h1 className="font-semibold text-lg my-2">Single User</h1>
                        <p className="text-4xl font-bold my-2">$149</p>
                        <div className="my-2 mx-auto text-center font-medium">
                            <p className="mb-2 border-t-2 py-1 px-5">500 GB Storage</p>
                            <p className="mb-2 border-t-2 py-1 px-5">1 Granted User</p>
                            <p className="mb-2 border-y-2 py-1 px-5">Send up to 2 GB</p>
                        </div>
                        <button className="p-4 bg-green-400 rounded-lg w-[150px] font-semibold">Start Trial</button>
                    </div>
                    <div className="p-8 flex flex-col items-center w-full shadow-xl rounded-lg hover:scale-105 duration-300 bg-slate-100">
                        <img className="w-20 mt-4 mb-3 mx-auto" src={Double} alt="" />
                        <h1 className="font-semibold text-lg my-2">Partnership</h1>
                        <p className="text-4xl font-bold my-2">$199</p>
                        <div className="my-2 mx-auto text-center font-medium">
                            <p className="mb-2 border-t-2 py-1 px-5">1 TB Storage</p>
                            <p className="mb-2 border-t-2 py-1 px-5">3 Granted Users</p>
                            <p className="mb-2 border-y-2 py-1 px-5">Send up to 10 GB</p>
                        </div>
                        <button className="p-4 bg-black text-green-400 rounded-lg font-semibold w-[150px]">Start Trial</button>
                    </div>
                    <div className="p-8 flex flex-col items-center w-full shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mt-4 mb-3 mx-auto" src={triple} alt="" />
                        <h1 className="font-semibold text-lg my-2">Group Account</h1>
                        <p className="text-4xl font-bold my-2">$299</p>
                        <div className="my-2 mx-auto text-center font-medium">
                            <p className="mb-2 border-t-2 py-1 px-5">5 TB Storage</p>
                            <p className="mb-2 border-t-2 py-1 px-5">10 Granted Users</p>
                            <p className="mb-2 border-y-2 py-1 px-5">Send up to 20 GB</p>
                        </div>
                        <button className="p-4 bg-green-400 rounded-lg w-[150px] font-semibold">Start Trial</button>
                    </div>
                </div>
        </div>
    )
}

export default Cards;