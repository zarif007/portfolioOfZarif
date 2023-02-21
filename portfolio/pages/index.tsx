import Head from 'next/head'
import { Inter } from '@next/font/google'
import SideBar from '@/components/SideBar'
import FootBar from '@/components/FootBar'
import AboutZarif from './../components/AboutZarif';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#2E2E2E]'>
      <Head>
        <title>Zarif</title>
        <meta name="description" content="About Zarif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='flex space-x-16 md:space-x-2 lg:space-x-80 overflow-hidden'>
        <div className=''>
          <SideBar />
        </div>
        <div className=' h-screen'>
          <AboutZarif />
        </div>
      </div>

      <FootBar />
    </div>
  )
}
