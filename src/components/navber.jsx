import React, {useState} from "react";
import { TfiMenuAlt , TfiClose} from "react-icons/tfi";
function Nav(){
    const [nav, setNav] = useState(true);
    function handleNav(){
        setNav(!nav);
    }
    return(
        <div className="flex justify-between items-center p-4 h-20 text-white">
            <h1 className="w-full text-3xl text-[#00df9a] font-bold">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {(!nav) ? <TfiClose size={25}/> : <TfiMenuAlt size={25} />}
                
            </div>
            <div className={(!nav) ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-slate-600 bg-black ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <h1 className="w-full text-3xl text-[#00df9a] font-bold m-4">REACT.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-b-slate-700">Home</li>
                    <li className="p-4 border-b border-b-slate-700">Company</li>
                    <li className="p-4 border-b border-b-slate-700">Resources</li>
                    <li className="p-4 border-b border-b-slate-700">About</li>
                    <li className="p-4 ">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;