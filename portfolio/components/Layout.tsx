import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';
import OpenTabs from './OpenTabs';

const Layout = ({ children }: { children: ReactNode }) => {

  const [isFileBarOpen] = useRecoilState<boolean>(fileBarState);

  return (
    <div className='flex h-full min-h-screen '>
        <div className={`${isFileBarOpen ? 'lg:w-2/12' : 'lg:w-1/12'} sm:w-2/12 w-3/12`}>
            <SideBar />
        </div>
        <div className={`w-full ${isFileBarOpen ? 'lg:w-10/12 max-w-6xl' : 'lg:w-11/12 max-w-7xl'} mx-auto flex`}>
          <OpenTabs />
          <div className='mx-auto'>
              {children}
          </div>
        </div>
    </div>
  )
}

export default Layout