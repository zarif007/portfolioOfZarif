import React, { useState } from 'react'
import { FiGithub } from "react-icons/fi";
import { BsFiles } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoTerminal } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import TerminalModal from './TerminalModal';
import FileBarModal from './FileBarModal';
import FileBar from './FileBar';
import { useRecoilState } from 'recoil';
import { fileBarState } from './../atoms/FileBarAtom';

const SideBar = () => {

  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const [isFileBarOpen, setIsFileBarOpen] = useRecoilState<boolean>(fileBarState);

  const [isFileBarModalOpen, setIsFileBarModalOpen] = useState<boolean>(true);

  const styles = {
    firstSideBarIcons: "w-10 h-10 text-gray-200 m-2 hover:text-white cursor-pointer"
  }
  return (
    <div className='flex h-full min-h-screen fixed z-20'>

        {/* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/}
      
      {/* social sidebar */}
      <div className='flex flex-col justify-between bg-[#2E2E2E] border-r border-[#171717]' style={{ maxHeight: "95vh" }}>
        <div className='flex flex-col space-y-4'>
            <div className={`${ isFileBarOpen && 'bg-[#ff6932]' } hidden lg:inline`} onClick={() => setIsFileBarOpen(!isFileBarOpen)}>
                <BsFiles className={styles.firstSideBarIcons} />  
            </div>

            <div className={`${ isFileBarModalOpen && 'bg-[#ff6932]' } inline lg:hidden`} onClick={() => setIsFileBarModalOpen(!isFileBarModalOpen)}>
                <BsFiles className={styles.firstSideBarIcons} />  
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
      
      <FileBarModal isFileBarOpen={isFileBarModalOpen} setIsFileBarOpen={setIsFileBarModalOpen} />
          
      {/* file sidebar */}
      {
        isFileBarOpen && <div className='hidden lg:inline'>
          <FileBar height="h-screen" setIsOpen={setIsFileBarOpen} />
        </div>
      }
      
    </div>
  )
}


export default SideBar
