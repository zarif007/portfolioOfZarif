import React from 'react'
import NumberLineBar from './NumberLineBar'


{/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}

const AboutZarif = () => {
  return (
    <div className='unselectable flex items-center justify-center sm:flex-row flex-col'>
      <div className=' md:my-48 mt-24 mx-4'>
        <p className='gradient1 font-bold text-xl'>Hello world, I am</p>

        <h1 className='md:text-9xl text-6xl font-extrabold gradient1'>Zarif</h1>
        <h1 className='md:text-5xl text-4xl font-extrabold gradient1'>I build web apps</h1>

        {/* <p className='max-w-60'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building accessible, human-centered products at</p> */}
      </div>      

      <img src="https://i.ibb.co/ZmdTfQx/Riverside-High-School-Computer-Club-removebg-preview.png" className='h-80 w-80' alt="banner" />
    </div>
  )
}

export default AboutZarif
