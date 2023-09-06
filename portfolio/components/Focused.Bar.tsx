import { focusedBars } from "@/utils/focusedBars";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import LargeHeading from "./ui/LargeHeading";
import CompFlicker from "./Comp.Flicker";

const FocusedBar = () => {
  const flickerElements = (): React.ReactNode[] => {
    const elements = focusedBars.map((bar, index) => {
      return (
        <div key={index} className="flex items-center justify-between">
        <div>
          <p className="lg:text-sm text-xs">
            {bar.split("/")[0]}
          </p>
          <LargeHeading size="xl" className="lg:text-xl text-lg gradient1-text">
            {bar.split("/")[1]}
          </LargeHeading>
        </div>
        <div className="flex space-x-2">
          <BsGithub className="w-6 h-6 cursor-pointer" />
          <TfiWorld className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      );
    });

    return elements;
  };
  return (
    <CompFlicker list={flickerElements()} />
  );
};

export default FocusedBar;
