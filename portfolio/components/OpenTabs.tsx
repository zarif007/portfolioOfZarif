import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { OpenTabsState } from "../atoms/OpenTabsAtom";

const OpenTabs = () => {
  const [openTabs, setOpenTabs] = useRecoilState(OpenTabsState);

  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const fullUrl = window.location.href.split('/')

    let url = ''
    fullUrl.splice(3, fullUrl.length).map((x: string) => {
      url += `/${x}`
    })
      
    setCurrentTab(url)
  }, [openTabs])

  const removeFromList = (url: string) => {
    setOpenTabs(openTabs.filter((x) => x.url != url));
  };
  return (
    <div className="top-0 fixed z-10">
      <div className="flex space-x-1 overflow-x-auto bg-[#171717]">
        {openTabs.map((tab: any, index: number) => {
          return (
            <div
              key={index}
              className={`  ${tab.url !== currentTab ? 'bg-[#171717] border-[#171717]' : 'border-[#ff6932] bg-[#2E2E2E]'}  border-t-4   cursor-pointer text-[#ff6932] px-6 py-2 font-semibold my-auto flex justify-center items-center space-x-4`}
            >
              <Link href={tab.url} className="flex space-x-1 justify-center items-center">
                <img src={tab.icon} className="h-4" alt="icon" />
                <p>{tab.name}</p>
              </Link>
              <RxCross2
                className="text-white"
                onClick={() => removeFromList(tab.url)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenTabs;
