import React, { useState, useEffect } from "react";
import GrayBorder from "./ui/GrayBorder";

const CompFlicker = ({ list }: { list: React.ReactNode[] }) => {
  const [counter, setCounter] = useState<number>(0);

  const [currentElement, setCurrentElement] = useState(list[counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(list[(counter + 1) % list.length]);
      setCounter(counter + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <GrayBorder>
      {currentElement}
    </GrayBorder>
  );
};

export default CompFlicker;
