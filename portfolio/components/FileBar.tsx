import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs';
import { AiFillFolderOpen } from 'react-icons/ai';
import Image from 'next/image';
import { folderStructure } from '@/folder-structure';

const FileBar = () => {
  return (
    <div className='flex flex-col space-y-1 bg-[#171717] min-w-48 h-screen '>
        <p className='text-white font-semibold text-center py-4 border-b-2 border-[#2E2E2E]'>Explorer</p>
        
        <div className='mr-1 w-screen max-w-xs'><DisplayFolders file={folderStructure} /></div>
    </div>
  )
}

const DisplayFolders = ({ file }: any) => {

    const [showChildren ,setShowChildren] = useState(true);
  
    const router = useRouter();
  
    return (
      <div className='block'>
        <div onClick={() => file.type === "folder" ? setShowChildren(!showChildren) : router.push(`${file.url}`)} className='border-l border-[#ff6932] text-gray-300 font-semibold px-4 py-1 max-w-lg flex items-center space-x-2 hover:bg-[#2E2E2E]  cursor-pointer rounded-r my-1'>
          { file.type === "folder" ? <>
            <BsChevronRight className={`${showChildren && 'rotate-90'}`} />
            <AiFillFolderOpen className='h-6 w-6' />
          </> : <Image src={file.icon} alt="matrix" width={20} height={20} /> }
          <p className='unselectable'>{file.name}</p>
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

export default FileBar
