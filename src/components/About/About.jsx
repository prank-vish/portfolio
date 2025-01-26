import React from 'react'
import AboutImg from "../../assets/Prankit2.jpg"
// import {IoArrowFroward} from "react-icons/io5"
import {IoArrowForward} from "react-icons/io5"
export default function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap
    md:justify-center bg:black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            {/* <img className='md:h-80' src={AboutImg} alt="About Img" /> */}
            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Front Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint ne
                            sciunt, quos vero repellendus inventore architecto id rerum vel necessitatibus,
                             atque dolore dignissimos excepturi obcaecati mollitia, quasi quae porro labore?
                        </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint ne
                            sciunt, quos vero repellendus inventore architecto id rerum vel necessitatibus,
                             atque dolore dignissimos excepturi obcaecati mollitia, quasi quae porro labore?
                        </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Data Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint ne
                            sciunt, quos vero repellendus inventore architecto id rerum?
                        </p>
                    </span>
                </div>
            </ul>
        </div>
        
      </div>
    </div>
  )
}
