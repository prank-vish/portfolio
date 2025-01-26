import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact,FaPython, } from "react-icons/fa"
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb,SiNextdotjs,SiTypescript,SiTailwindcss,SiCplusplus } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

export default function Experience() {
    return (
        <div id="Skills" className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>
                Skills
            </h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='flex flex-wrap md: gap-8 md:p-12 py-10'>
                    {/* <span className='p-3 bg-zinc-950 felx items-center rounded-2xl'>
                    <FaHtml5 color='white'size={50} />
                </span>
                <span className='p-3 bg-zinc-950 felx items-center rounded-2xl'>
                    <FaCss3 color='white'size={50} />
                </span>
                <span className='p-3 bg-white felx items-center rounded-2xl'>
                    <FaReact color="#6IDAFB" size={50} />
                </span>
                <span className='p-3 bg-zinc-950 felx items-center rounded-2xl'>
                    <FaJs color='white'size={50} />
                </span>
                <span className='p-3 bg-zinc-950 felx items-center rounded-2xl'>
                    <SiMongodb color='green'size={50} />
                </span> */}

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaHtml5 color="#E34F26" size={50} />
                    </span>

                    {/* CSS */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaCss3 color="#1572B6" size={50} />
                    </span>

                    {/* React */}
                    <span className="p-3 bg-white flex items-center rounded-2xl">
                        <FaReact color="#61DAFB" size={50} />
                    </span>

                    {/* JavaScript */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaJs color="#F7DF1E" size={50} />
                    </span>

                    {/* MongoDB */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiMongodb color="#47A248" size={50} />
                    </span>

                    {/* Next.js */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiNextdotjs color="white" size={50} />
                    </span>

                    {/* TypeScript */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiTypescript color="#3178C6" size={50} />
                    </span>

                    {/* Tailwind CSS */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiTailwindcss color="#38BDF8" size={50} />
                    </span>

                    {/* Python */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaPython color="#3776AB" size={50} />
                    </span>

                    {/* C++ */}
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiCplusplus color="#00599C" size={50} />
                    </span>

                </div>
                </div>
                <h1 className='leading-tight text-2xl md:text-4xl text-white font-bold'>Education</h1>
                <div className='flex flex-col gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 '>
                    <div className='text-white'>
                        <h3>2023-Present</h3>
                        <p>Bachelors in Computer Science from SVNIT,Surat</p>
                    </div>
                    <div className='text-white' >
                        <h3>2022</h3>
                        <p>Higher Secondary from CBSE Board</p>
                    </div>
                    <div className='text-white'>
                        <h3>2020</h3>
                        <p>Secondary from CBSE Board</p>
                    </div>
                </div>
            

        </div>
    )
}
