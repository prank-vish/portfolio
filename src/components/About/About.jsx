import React from 'react'
import img1 from "../../assets/working.png"
// import {IoArrowFroward} from "react-icons/io5"
import {IoArrowForward} from "react-icons/io5"
export default function About() {
  return (
    <div id='About' className='text-white  overflow-hidden 
     bg:black shadow-xl bg-opacity-30 rounded-lg p-10 md:p-24'>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
      <div>
        <div className='md:flex flex-col md:flex-row items-center justify-center'>
            <img className='md:h-80 p-' src={img1} alt="About Img" />
            <ul className=''>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Front Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Passionate and detail-oriented Frontend Developer; building dynamic, responsive, and user-friendly web applications.
                             Proficient in modern JavaScript frameworks, libraries, and tools.
                        </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Proficient in database management, API creation, and performane optimization.
                            Committed to make secure, high-quality, and maintainable code.
                        
                        </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>DSA Enthusiast</h1>
                        <p className='text-sm md:text-md leading-tight'>An enthusiast of Data Structures and Algorithms,with strong foundation
                            in problem-solving.
                        </p>
                    </span>
                </div>
            </ul>
        </div>
        
      </div>
    </div>
  )
}
