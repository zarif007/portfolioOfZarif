import React, { useEffect, useRef, useState } from "react";
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
