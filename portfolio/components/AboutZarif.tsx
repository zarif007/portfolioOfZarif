import React from 'react'
import NumberLineBar from './NumberLineBar'


{/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}

const AboutZarif = () => {
  return (
    <div className='flex unselectable mx-auto'>
      <div className='md:mx-24 mx:4 md:my-48 my-24'>
        <p className='gradient1 font-bold text-xl'>Hello world, I am</p>

        <h1 className='md:text-9xl text-6xl font-extrabold gradient1'>Zarif</h1>
        <h1 className='md:text-5xl text-4xl font-extrabold gradient1'>I build web apps</h1>

        {/* <p className='max-w-60'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building accessible, human-centered products at</p> */}
      </div>      
    </div>
  )
}

export default AboutZarif
