import React from 'react'
import imag from "../../assets/Prankit1.jpg"
import imag2 from "../../assets/Prankit4.png"
import imagg from "../../assets/vecteezy_software-engineer-png-graphic-clipart-design_20962925.png"

export default function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>
        <div className='md:w-2/4 w-full md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                Hello! I am Prankit Vishwakarma
            </h1>
            <p className='text-sm md:text-2xl tracking-tight'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni dolorem commodi
                    dflk owie osiefj dofiw
            </p>
           
        </div>
        <div className='flex flex-row justify-end'><img className='lg:w-2/5 ' src ={imagg} alt="home image" /></div>
        
    </div>
  )
}
