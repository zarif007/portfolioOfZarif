import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

{
  /* 1st = #171717
            2nd =  #2E2E2E
            orange = #ff6932*/
}

const imgArr = [
  "https://i.seadn.io/gae/WXxBdMz5M26O5QWkwTINGYTdGvWq3edErejzPRwm2Vgobln0v3GPKsjpvnA-yNTFQDIai6ztKdBuD1NiR92bA9tLBfTmv0aH-XysMAY?auto=format&w=1000",
  "https://i.seadn.io/gae/p9jPZKQ04Vm86g9p4nzJKgi9Ap2T7s07quXvV2W4IDf7S0ckTH8l2-FuH_43it1YhPeCvK_di70XSlsVTul5LsIOuuHrPykhgZKE?auto=format&w=1000",
];

//

const focusedBars = [
  'Building🏗️/     Gamocracy',
  'Planning🧠/ OpenCourse ',
  'Developing🏗️/    an  e-commerce',
  'Planning🧠/ a fabric   project',

];

const AboutZarif = () => {
  const [counter, setCounter] = useState<number>(0);

  const [currentFocusedBar, setCurrentFocusedBar] = useState(focusedBars[counter]);

  const animateRef = useRef<any>();

  useEffect(() => {
    if (animateRef.current) {
      autoAnimate(animateRef.current);
    }
  }, [animateRef]);

  useEffect(() => {


    const interval = setInterval(() => {
      setCurrentFocusedBar(focusedBars[(counter + 1) % focusedBars.length]);
      setCounter(counter + 1)
    }, 2000);

    return () => clearInterval(interval);
  }, [counter])

  return (
    <div className="unselectable flex items-center justify-between ">
      <div className=" md:my-40 mt-12  mr-6 ">
        <p className="gradient1-text font-bold md:text-xl text-md">
          Hello world, I am
        </p>

        <h1 className="md:text-9xl text-7xl font-extrabold gradient1-text">
          Zarif
        </h1>
        <h1 className="md:text-5xl text-3xl font-extrabold gradient1-text">
          I build web apps
        </h1>

        <div className="pt-4 text-gray-200 font-semibold lg:text-lg text-sm max-w-xl">
          <p>
            I’m a software developer specializing in building (and occasionally
            designing) web applications. Currently,
          </p>
          <div ref={animateRef}>
            <div className="py-4 px-2 border-2 border-gray-700 bg-[#171717] flex items-center justify-between rounded my-3">
              <div>
                <p className="lg:text-sm text-xs">{currentFocusedBar.split('/')[0]}</p>
                <p className="lg:text-xl text-lg gradient1-text">{currentFocusedBar.split('/')[1]}</p>
              </div>
              <div className="flex space-x-2">
                <BsGithub className="w-6 h-6 cursor-pointer" />
                <TfiWorld className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <button className="my-6 px-16 py-4 rounded-sm font-bold text-md text-gray-200 border-2 gradient1-border hover:bg-opacity-5 hover:bg-[#ff6932]">
          DO
        </button>
      </div>

      <div className="w-1/3 border-4 gradient1-border hidden lg:inline mr-4">
        <img
          src={`${imgArr[Math.floor(Math.random() * 2)]}`}
          className=""
          alt="banner"
          style={{ objectFit: "cover", height: 400, width: 500 }}
        />
      </div>
    </div>
  );
};

export default AboutZarif;
