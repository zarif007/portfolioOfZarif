import { focusedBars } from "@/utils/focusedBars";
import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

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
    <div className="py-4 px-2 border-2 border-gray-700 bg-[#171717] flex items-center justify-between rounded my-3">
      <div>
        <p className="lg:text-sm text-xs">{currentFocusedBar.split("/")[0]}</p>
        <p className="lg:text-xl text-lg gradient1-text">
          {currentFocusedBar.split("/")[1]}
        </p>
      </div>
      <div className="flex space-x-2">
        <BsGithub className="w-6 h-6 cursor-pointer" />
        <TfiWorld className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default FocusedBar;
