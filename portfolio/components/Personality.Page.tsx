import React, { useEffect, useState } from "react";
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
      <div className="my-12 mt-6 md:my-24">
        <LargeHeading size="xl" className="gradient1-text">
          Here comes,
        </LargeHeading>
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
