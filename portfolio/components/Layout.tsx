import React, { ReactNode } from 'react'
import SideBar from './SideBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex space-x-2 lg:space-x-24'>
        <div className='w-4/12 xs:w-2/12 sm:w-2/12 md:w-3/12 '>
            <SideBar />
        </div>
        <div className='h-full min-h-screen'>
            {children}
        </div>
    </div>
  )
}

export default Layout
