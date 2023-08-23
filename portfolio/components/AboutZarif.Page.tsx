import React, { useState } from "react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { Button } from "./ui/Button";
import FocusedBar from "./Focused.Bar";
import GetButtonGroup from "./GetButtonGroup";
import Image from "next/image";
import pandaCoding from 'public/pandaCoding.gif'

const AboutZarif = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  return (
    <div className="unselectable flex items-center justify-center ml-4 md:ml-0">
      <div className=" md:mt-40 mb-24 my-12  mr-6 ">
        <Image src={pandaCoding} alt="icon" height={80} width={80} />
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
