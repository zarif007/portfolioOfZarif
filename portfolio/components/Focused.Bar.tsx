import { focusedBars } from "@/utils/focusedBars";
import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import GrayBorder from "./ui/GrayBorder";
import LargeHeading from "./ui/LargeHeading";

const FocusedBar = () => {
  const [counter, setCounter] = useState<number>(0);

  const [currentFocusedBar, setCurrentFocusedBar] = useState(
    focusedBars[counter]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocusedBar(focusedBars[(counter + 1) % focusedBars.length]);
      setCounter(counter + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <GrayBorder>
      <div className="flex items-center justify-between">
        <div>
          <p className="lg:text-sm text-xs">
            {currentFocusedBar.split("/")[0]}
          </p>
          <LargeHeading size="xl" className="lg:text-xl text-lg gradient1-text">
            {currentFocusedBar.split("/")[1]}
          </LargeHeading>
        </div>
        <div className="flex space-x-2">
          <BsGithub className="w-6 h-6 cursor-pointer" />
          <TfiWorld className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </GrayBorder>
  );
};

export default FocusedBar;
