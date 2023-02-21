import React, { ReactNode } from 'react'
import SideBar from './SideBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex space-x-2 lg:space-x-24'>
        <div className='w-2/12'>
            <SideBar />
        </div>
        <div className='h-screen'>
            {children}
        </div>
    </div>
  )
}

export default Layout
