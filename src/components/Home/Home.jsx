import React from 'react'
import imagg from "../../assets/vecteezy_software-engineer-png-graphic-clipart-design_20962925.png"

export default function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>
        <div className='md:w-2/4 w-full md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                Hello! I am Prankit Vishwakarma
            </h1>
            <p className='text-sm md:text-xl tracking-tight mt-4'>
            I am software developer with a passion for problem-solving and a keen interest in Data Structures and Algorithms. 
            </p>
           
        </div>
        <div className='flex flex-row justify-end'><img className='lg:w-2/5 ' src ={imagg} alt="home image" /></div>
        
    </div>
  )
}
