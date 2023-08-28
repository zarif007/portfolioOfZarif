import React, { useEffect, useState } from "react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import GrayBorder from "./ui/GrayBorder";
import duck from "public/duck.gif";
import Image from "next/image";
import CompFlicker from "./Comp.Flicker";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";

const personalityTraits = [
  {
    name: "Self Motivated",
    emoji: "💪🔥",
    description: `Driven, always on task.`,
  },
  {
    name: "Adaptable",
    emoji: "🔄🔀",
    description: `Swiftly shifts, agile coder.`,
  },
  {
    name: "Problem Solver",
    emoji: "🧩🔧",
    description: `Loves puzzles, finds fixes.`,
  },
  {
    name: "Detail Oriented",
    emoji: "🧠🔍",
    description: `Precision-focused, code sleuth.`,
  },
];

const PersonalityPage = ({ withDetails }: { withDetails: boolean }) => {
  const router = useRouter();
  const flickerElements = (): React.ReactNode[] => {
    const elements = personalityTraits.map((trait, index) => {
      return (
        <div key={index} className="flex justify-center space-x-4 items-center">
          <Paragraph className="gradient1-text font-bold">
            {trait.name}
          </Paragraph>
          <Paragraph>{trait.emoji}</Paragraph>
        </div>
      );
    });

    return elements;
  };
  const flickerElementsDescription = (): React.ReactNode[] => {
    const elements = personalityTraits.map((trait, index) => {
      return (
        <div key={index} className="flex justify-center space-x-4 items-center">
          <Paragraph className="gradient1-text font-bold">
            {trait.description}
          </Paragraph>
        </div>
      );
    });

    return elements;
  };

  return (
    <div className="unselectable flex justify-center ml-4 md:ml-0">
      <div className="my-12 mt-6 md:my-24 mr-6">
        <Image src={duck} alt="icon" height={80} width={80} />
        <Paragraph className="gradient1-text font-bold">Here comes,</Paragraph>
        <LargeHeading size="xl3" className="gradient1-text uppercase">
          Personality
        </LargeHeading>
        <Paragraph className="pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl">
          A little bit about myself (
          <span className="gradient1-text">++Exaggeration</span> &&{" "}
          <span className="gradient1-text">++Overestimation</span> &&{" "}
          <span className="gradient1-text">++Fantasy</span>)
        </Paragraph>
        <CompFlicker list={flickerElements()} />
        {withDetails ? (
          <React.Fragment>
            <div className="border-l-4 animate-pulse border-dotted border-gray-700 h-8 w-0 mx-auto"></div>
            <CompFlicker list={flickerElementsDescription()} />
          </React.Fragment>
        ) : (
          <Button
            variant="default"
            onClick={() => router.push("/personality")}
            className="mt-6 px-16 py-4"
          >
            <p className="">More?</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PersonalityPage;
