import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';
import OpenTabs from './OpenTabs';

const Layout = ({ children }: { children: ReactNode }) => {

  const [isFileBarOpen] = useRecoilState(fileBarState);

  return (
    <div className='flex'>
        <div className={`${isFileBarOpen ? 'lg:w-3/12' : 'lg:w-1/12'} sm:w-2/12 w-4/12`}>
            <SideBar />
        </div>
        <div className={`w-full ${isFileBarOpen ? 'lg:w-9/12 max-w-4xl' : 'lg:w-11/12 max-w-6xl'} mx-auto`}>
          <OpenTabs />
          <div className='h-full min-h-screen mx-auto'>
              {children}
          </div>
        </div>
    </div>
  )
}

export default Layout