import React from "react";

function News(){
    return(
        <div className="w-full text-white px-5 py-8">
            <div className="bg-black grid lg:grid-cols-3">
                <div className="m-4 p-5 text-center lg:col-span-2">
                    <h1 className="sm:text-2xl text-xl font-bold">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-md text-black'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 transition-transform transform hover:scale-110'>
                            Notify Me
                        </button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-[#00df9a]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default News;