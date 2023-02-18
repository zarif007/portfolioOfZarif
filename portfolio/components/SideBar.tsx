import React from 'react'
import { GoBrowser } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const SideBar = () => {
  const styles = {
    firstSideBarIcons: "w-10 h-10 text-gray-200 m-2 hover:text-white cursor-pointer"
  }
  return (
    <div className='flex h-full'>

        {/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}
      
      {/* first sidebar */}
      <div className='flex flex-col justify-between bg-[#2E2E2E] h-screen'>
        <div className='flex flex-col space-y-4'>
            <div className='bg-[#ff6932] '>
                <GoBrowser className={styles.firstSideBarIcons} />  
            </div>
            <div className=''>
                <FaGithubSquare className={styles.firstSideBarIcons} />
            </div>
            <div className=''>
                <FaLinkedin className={styles.firstSideBarIcons} />  
            </div>
            <div className=''>
                <AiFillFacebook className={styles.firstSideBarIcons} />  
            </div>
        </div>

        <div className='mb-1'>
                <FiSettings className={styles.firstSideBarIcons} />  
            </div>
      </div>
      

      {/* 2nd sidebar */}
      <div className='flex flex-col space-y-6 bg-[#171717] h-screen min-w-48'>
        <p className='text-white font-semibold px-24 pb-2 pt-4'>Explorer</p>
        <div className='text-white font-semibold bg-[#2E2E2E] px-4 py-1 max-w-lg flex items-center space-x-2'>
            <BsChevronRight />
            <p>About Zarif</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
