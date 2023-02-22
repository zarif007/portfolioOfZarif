import { fileBarState } from '@/atoms/FileBarAtom';
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { useRecoilState } from 'recoil';

const Layout = ({ children }: { children: ReactNode }) => {

  const [isFileBarOpen] = useRecoilState(fileBarState);

  console.log('eee', isFileBarOpen)

  return (
    <div className='flex'>
        <div className={`${isFileBarOpen ? 'lg:w-3/12' : 'lg:w-1/12'} sm:w-2/12 w-8/12`}>
            <SideBar />
        </div>
        <div className='h-full min-h-screen mx-auto'>
            {children}
        </div>
    </div>
  )
}

export default Layout
