export const aboutZarif = `import React, { useState } from "react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { Button } from "./ui/Button";
import FocusedBar from "./Focused.Bar";
import GetButtonGroup from "./GetButtonGroup";

const AboutZarif = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  return (
    <div className="unselectable flex items-center justify-center ml-4 md:ml-0">
      <div className=" md:my-40 my-12  mr-6 ">
        <LargeHeading className="gradient1-text" size="xl">
          Hello world, I am
        </LargeHeading>
        <LargeHeading className="gradient1-text" size="xl7">
          Zarif
        </LargeHeading>
        <LargeHeading className="gradient1-text" size="xl3">
          I build web apps
        </LargeHeading>

        <section className="pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl">
          <Paragraph>
            I’m a software developer specializing in building (and occasionally
            designing) web applications. Currently,
          </Paragraph>
          <FocusedBar />
        </section>

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

export const personality = `import React, { useEffect, useState } from "react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import GrayBorder from "./ui/GrayBorder";

const personalityTraits = [
  {
    name: "Self Motivated",
    emoji: "💪🔥",
  },
  {
    name: "Adaptable",
    emoji: "🔄🔀",
  },
  {
    name: "Problem Solver",
    emoji: "🧩🔧",
  },
  {
    name: "Detail Oriented",
    emoji: "🧠🔍",
  },
];

const PersonalityPage = () => {
  const [counter, setCounter] = useState<number>(0);

  const [currentPersonalityTrait, setCurrentPersonalityTrait] = useState(
    personalityTraits[counter]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersonalityTrait(
        personalityTraits[(counter + 1) % personalityTraits.length]
      );
      setCounter(counter + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className="unselectable flex justify-center ml-4 md:ml-0">
      <div className="mb-12 mt-6 md:mb-24">
        <LargeHeading size="xl3" className="gradient1-text uppercase">
          Personality
        </LargeHeading>
        <Paragraph className="pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl">
          A little bit about myself (
          <span className="gradient1-text">++Exaggeration</span> &&{" "}
          <span className="gradient1-text">++Overestimation</span> &&{" "}
          <span className="gradient1-text">++Fantasy</span>)
        </Paragraph>
        <GrayBorder>
          <div className="flex justify-center space-x-4 items-center">
            <LargeHeading size="xl" className="gradient1-text">
              {currentPersonalityTrait.name}
            </LargeHeading>
            <LargeHeading size="xl">
              {currentPersonalityTrait.emoji}
            </LargeHeading>
          </div>
        </GrayBorder>
      </div>
    </div>
  );
};

export default PersonalityPage;
`;
