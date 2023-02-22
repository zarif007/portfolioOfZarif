import React from 'react'
import Head from 'next/head';
import SideBar from '@/components/SideBar';
import FootBar from '../../../components/FootBar';
import Layout from '@/components/Layout';

const Skills = () => {
  return (
    <div className='bg-[#2E2E2E]'>
      <Head>
        <title>Zarif</title>
        <meta name="description" content="About Zarif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
      <div className='pt-4 text-gray-200 font-semibold md:text-lg text-sm max-w-xl mt-12'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, I’m focused on building accessible, human-centered products at</div>
      </Layout>
      

      <FootBar />
    </div>
  )
}

export default Skills
