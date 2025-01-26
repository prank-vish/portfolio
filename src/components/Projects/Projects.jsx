import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects </h1>
      <div className='py-12 px-8 flex flex-wrap gap-8 items-center justify-center'>
        <ProjectCard
          title="Tales of Bharat"
          main="This website helps you to connect with your roots by showing and telling you about rich cultural heritage"
          linkk="https://magnificent-baklava-487e9c.netlify.app/" />

        <ProjectCard
          title="Tic Tac Toe"
          main="This is a fun game. So give it a try"
          linkk="https://prank-vish.github.io/tic-tac-toe/" />
        {/* <ProjectCard
          title="Tales of Bharat"
          main="this website connectsskd owiff owfi wlirj ofi mfprnsdf fkljffwoeiw oweirp" /> */}
      </div>
    </div>
  )
}
