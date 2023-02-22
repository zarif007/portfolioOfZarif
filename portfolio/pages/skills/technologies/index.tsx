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
        <p className='mx-auto'>Hiiiii</p>
      </Layout>
      

      <FootBar />
    </div>
  )
}

export default Skills
