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
import { folderStructure } from './../folder-structure';
import typescript_parrot from '../public/typescript_parrot.gif'
import Image from "next/image";

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
      <div className='flex flex-col space-y-1 bg-[#171717] h-screen min-w-48'>
        <p className='text-white font-semibold px-24 pb-2 pt-4 border-b-2 border-[#2E2E2E]'>Explorer</p>
        
        <div className='mr-1'><DisplayFolders file={folderStructure} /></div>
      </div>
    </div>
  )
}
const DisplayFolders = ({ file }: any) => {

  const [showChildren ,setShowChildren] = useState(true)

  return (
    <div className='block  '>
      

      <div onClick={() => setShowChildren(!showChildren)} className='border-l text-white font-semibold px-4 py-1 max-w-lg flex items-center space-x-2 hover:bg-[#2E2E2E]  cursor-pointer rounded-r my-1'>
        { file.type === "folder" ? <BsChevronRight /> : <Image src={typescript_parrot} alt="matrix" width={20} height={20} /> }
        <p>{file.name}</p>
      </div>

      <div className=' pl-3'>
        {
          file.type === "folder" && showChildren && file.children.length > 0 && file.children.map((child: any, index: number) => {
            return (
              <DisplayFolders key={index} file={child} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SideBar
