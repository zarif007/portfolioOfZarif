import React from 'react'

{/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}

const AboutZarif = () => {
  return (
    <div className='unselectable flex items-center justify-center max-w-5xl'>
      <div className=' md:my-40 mt-12  mr-6 '>
        <p className='gradient1-text font-bold text-xl'>Hello world, I am</p>

        <h1 className='md:text-9xl text-6xl font-extrabold gradient1-text'>Zarif</h1>
        <h1 className='md:text-5xl text-4xl font-extrabold gradient1-text'>I build web apps</h1>

        <div className='pt-4 text-blue-200 font-semibold text-lg max-w-xl'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building accessible, human-centered products at</div>

        <button className='my-6 px-16 py-4 rounded-sm font-bold text-lg text-blue-200 border-2 gradient1-border hover:bg-opacity-5 hover:bg-[#ff6932]'>Get CV</button>
      </div>      

      <div className='w-1/3 border-4 gradient1-border hidden lg:inline mr-4'>
        <img src="https://i.ibb.co/ZmdTfQx/Riverside-High-School-Computer-Club-removebg-preview.png" className='' alt="banner" />
      </div>
      
    </div>
  )
}

export default AboutZarif
