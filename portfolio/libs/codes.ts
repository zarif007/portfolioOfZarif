export const aboutZarif = `import React, { useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { GrContact } from "react-icons/gr";
import Code from "./Code";
import { aboutZarif } from "@/libs/codes";
import SimpleBar from "simplebar-react";
import { focusedBars } from "@/utils/focusedBars";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { Button } from "./ui/Button";
import FocusedBar from "./Focused.Bar";
import GetButtonGroup from "./GetButtonGroup";

const AboutZarif = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  return (
    <div className="unselectable flex items-center justify-center ml-4 md:ml-0">
      <div className=" md:my-40 mt-12  mr-6 ">
        <LargeHeading className="gradient1-text" size="xl">
          Hello world, I am
        </LargeHeading>
        <LargeHeading className="gradient1-text" size="xl7">
          Zarif
        </LargeHeading>
        <LargeHeading className="gradient1-text" size="xl3">
          I build web apps
        </LargeHeading>

        <div className="pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl">
          <Paragraph>
            I’m a software developer specializing in building (and occasionally
            designing) web applications. Currently,
          </Paragraph>
          <FocusedBar />
        </div>

        <Button
          variant="default"
          onClick={() => setIsButtonClicked(!isButtonClicked)}
          className="mt-6 px-16 py-4"
        >
          <p className="">GET</p>
        </Button>

        {isButtonClicked && <GetButtonGroup />}
      </div>
    </div>
  );
};

export default AboutZarif;
`;

export const personality = `import React from "react";
import Head from "next/head";
import FootBar from "../../components/FootBar";
import Layout from "@/components/Layout";

const Personality = () => {
  return (
    <div className="bg-[#2E2E2E]">
      <Head>
        <title>Zarif</title>
        <meta name="description" content="About Zarif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className=" text-gray-200 text-sm mt-12">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
        </div>
      </Layout>

      <FootBar />
    </div>
  );
};

export default Personality;
`;

export const skillsTechnology = `import React from 'react'
import Head from 'next/head';
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
      <div className=' text-gray-200 text-sm mt-12'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, I’m focused on building accessible, human-centered products at</div>
      </Layout>
      

      <FootBar />
    </div>
  )
}

export default Skills
`;
