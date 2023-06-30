import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { OpenTabsState } from "../atoms/OpenTabsAtom";
import { TabInterface } from "./../interfaces/TabInterface";
import getUrlLocation from "./../hooks/getUrlLocation";
import addToOpenTabList from "@/libs/addToOpenTabList";
import { folderStructure } from "@/folder-structure";
import { FileInterface } from "@/interfaces/FileInterface";

const OpenTabs = () => {
  const [openTabs, setOpenTabs] = useRecoilState<TabInterface[]>(OpenTabsState);
  const [tabOnHover, setTabOnHover] = useState<TabInterface | null>(null);

  const [currentTabUrl, setCurrentTabUrl] = useState<string>("");

  const getCurrentUrlAndAddToTabList = (files: any, currentUrl: string) => {
    files.map((child: FileInterface) => {
      if (child.url === currentUrl && child.type === "file") {
        setOpenTabs(addToOpenTabList(child, openTabs));
        return;
      }
      child.type === "folder" &&
        getCurrentUrlAndAddToTabList(child.children, currentUrl);
    });
  };

  useEffect(() => {
    const currentUrl = getUrlLocation();
    setCurrentTabUrl(currentUrl);

    getCurrentUrlAndAddToTabList(folderStructure.children, currentUrl);
  }, [openTabs]);

  const removeFromList = (url: string) => {
    setOpenTabs(openTabs.filter((x) => x.url != url));
  };
  return (
    <div className="top-0 fixed z-10">
      <div className="flex space-x-1 bg-[#171717]">
        {openTabs.map((tab: TabInterface, index: number) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setTabOnHover(tab)}
              onMouseLeave={() => setTabOnHover(null)}
              className={`  ${
                tab.url !== currentTabUrl
                  ? "bg-[#2d2d30] border-[#2d2d30] text-gray-200"
                  : "border-[#007acc] text-[#007acc] bg-[#1e1e1e]"
              }  border-t-4   cursor-pointer  hover:text-[#007acc] px-6 py-2 font-semibold my-auto flex justify-center items-center space-x-4`}
            >
              <Link
                href={tab.url}
                className="flex space-x-1 justify-center items-center"
              >
                <img src={tab.icon} className="h-4" alt="icon" />
                <p>{tab.name}</p>
              </Link>
              {(tabOnHover && tabOnHover.url === tab.url) ||
              currentTabUrl === tab.url ? (
                <RxCross2
                  className="text-white"
                  onClick={() => removeFromList(tab.url)}
                />
              ) : (
                <div className="w-4"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenTabs;
