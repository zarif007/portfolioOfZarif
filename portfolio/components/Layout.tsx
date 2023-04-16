import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';
import OpenTabs from './OpenTabs';
import Code from './Code';
import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

const Layout = ({ children, code }: { children: ReactNode, code: string }) => {

  const [isFileBarOpen] = useRecoilState<boolean>(fileBarState);

  const [showCode, setShowCode] = useState<boolean>(true);

  const handleCompileCode = () => {
    setShowCode(false)
  }

  return (
    <div className='flex h-full min-h-screen '>
        <div className={`lg:w-1/12 sm:w-2/12 w-3/12`}>
            <SideBar />
        </div>
        <div className={`mx-auto ${!showCode && 'max-w-8xl w-full'}`}>
          <OpenTabs />
          {
            !showCode && children
          }
        </div>
        
        {
          showCode && <div className='w-full flex flex-col'>
            <div className='flex justify-end mx-4 items-center space-x-2 mt-8 cursor-pointer'
              onClick={handleCompileCode}>
              <FiPlay />
              <p>Run Code</p>
            </div>
            <div>
              <Code language="javascript" code={code} animated show />
            </div>
          </div>
        }
    </div>
  )
}

export default Layout