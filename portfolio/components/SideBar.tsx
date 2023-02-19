import React, { useState } from 'react'
import { FiGithub } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { VscGithubAction } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoTerminal } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import TerminalModal from './TerminalModal';

const SideBar = () => {

  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const styles = {
    firstSideBarIcons: "w-10 h-10 text-gray-200 m-2 hover:text-white cursor-pointer"
  }
  return (
    <div className='flex h-full'>

        {/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}
      
      {/* first sidebar */}
      <div className='flex flex-col justify-between bg-[#2E2E2E]' style={{ maxHeight: "95vh" }}>
        <div className='flex flex-col space-y-4'>
            <div className='bg-[#ff6932]'>
                <VscGithubAction className={styles.firstSideBarIcons} />  
            </div>
            <div className=''>
                <FiGithub className={styles.firstSideBarIcons} />
            </div>
            <div className=''>
                <AiOutlineLinkedin className={styles.firstSideBarIcons} />  
            </div>
            <div className=''>
                <AiOutlineFacebook className={styles.firstSideBarIcons} />  
            </div>
            <div className=''>
                <IoLogoInstagram className={styles.firstSideBarIcons} />  
            </div>
        </div>
        
        <TerminalModal isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} />
        
        <div className=' flex flex-col space-y-3'>
          <IoTerminal onClick={() => setIsTerminalOpen(true)} className={styles.firstSideBarIcons} />
          <AiTwotoneSetting className={styles.firstSideBarIcons} />  
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
