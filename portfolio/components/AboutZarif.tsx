import React from 'react'

{/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}

const imgArr = 
    ["https://i.seadn.io/gae/WXxBdMz5M26O5QWkwTINGYTdGvWq3edErejzPRwm2Vgobln0v3GPKsjpvnA-yNTFQDIai6ztKdBuD1NiR92bA9tLBfTmv0aH-XysMAY?auto=format&w=1000",
    "https://i.seadn.io/gae/p9jPZKQ04Vm86g9p4nzJKgi9Ap2T7s07quXvV2W4IDf7S0ckTH8l2-FuH_43it1YhPeCvK_di70XSlsVTul5LsIOuuHrPykhgZKE?auto=format&w=1000"]

            // 

const AboutZarif = () => {
  return (
    <div className='unselectable flex items-center justify-between '>
      <div className=' md:my-40 mt-12  mr-6 '>
        <p className='gradient1-text font-bold md:text-xl text-md'>Hello world, I am</p>

        <h1 className='md:text-9xl text-7xl font-extrabold gradient1-text'>Zarif</h1>
        <h1 className='md:text-5xl text-3xl font-extrabold gradient1-text'>I build web apps</h1>

        <div className='pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl'>
          <p>I’m a software developer specializing in building (and occasionally designing) web applications. 
          Currently, I’m focused on:</p>
          <p className='mt-1 lg:text-md text-sm gradient1-text'>Building Gamocracy</p>
          <p className='mt-1 lg:text-md text-sm gradient1-text'>Developing an e-commerce site</p>
          <p className='mt-1 lg:text-md text-sm gradient1-text'>Planning OpenCourse</p>
          <p className='mt-1 lg:text-md text-sm gradient1-text'>Planning a hyperledger fabric project</p>
        </div>

        <button className='my-6 px-16 py-4 rounded-sm font-bold text-md text-gray-200 border-2 gradient1-border hover:bg-opacity-5 hover:bg-[#ff6932]'>Get CV</button>
      </div>      

      <div className='w-1/3 border-4 gradient1-border hidden lg:inline mr-4'>
        <img src={`${imgArr[Math.floor(Math.random() * 2)]}`} className='' alt="banner" />
      </div>
      
    </div>
  )
}

export default AboutZarif
