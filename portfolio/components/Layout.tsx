import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';
import OpenTabs from './OpenTabs';
import Code from './Code';
import { aboutZarif } from '@/libs/codes';

const Layout = ({ children }: { children: ReactNode }) => {

  const [isFileBarOpen] = useRecoilState<boolean>(fileBarState);

  return (
    <div className='flex h-full min-h-screen '>
        <div className={`${isFileBarOpen ? 'lg:w-2/12' : 'lg:w-1/12'} sm:w-2/12 w-3/12`}>
            <SideBar />
        </div>
        <div className='mx-auto '>
          <OpenTabs />
          {/* {children} */}
          
        </div>
        <Code language="tsx" code={aboutZarif} animated show />
    </div>
  )
}

export default Layout