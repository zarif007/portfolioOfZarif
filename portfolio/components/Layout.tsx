import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';
import OpenEditors from './OpenTabs';

const Layout = ({ children }: { children: ReactNode }) => {

  const [isFileBarOpen] = useRecoilState(fileBarState);

  console.log('eee', isFileBarOpen)

  return (
    <div className='flex'>
        <div className={`${isFileBarOpen ? 'lg:w-3/12' : 'lg:w-1/12'} sm:w-2/12 w-4/12`}>
            <SideBar />
        </div>
        <div className='flex flex-col'>
          <OpenEditors />
          <div className='h-full min-h-screen mx-auto'>
              {children}
          </div>
        </div>
    </div>
  )
}

export default Layout
