import React from "react";
import { RxCross2 } from "react-icons/rx";
import { folderStructure } from "@/folder-structure";
import DisplayFolders from "./DisplayFolders";
import { useRecoilState } from 'recoil';
import { OpenTabsState } from '@/atoms/OpenTabsAtom';
import { TabInterface } from './../interfaces/TabInterface';


const FileBar = ({
  height,
  setIsOpen,
}: {
  height: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const [openTabs, setOpenTabs] = useRecoilState<TabInterface[]>(OpenTabsState);

  const tabs = {
    name: "Open Tabs",
    icon: "",
    url: "/",
    type: "folder",
    children: openTabs
  }
  return (
    <div className={`flex flex-col space-y-1 bg-[#171717] min-w-48 ${height} z-20 pb-12`}>
      <div
        className={`text-white font-semibold text-center py-4 border-b-2 border-[#2E2E2E] flex justify-between items-center px-4`}
      >
        <p>Explorer</p>
        <RxCross2 className="cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      <div className="mr-1 w-screen max-w-xs overflow-y-auto">
        <DisplayFolders file={tabs} />
        <DisplayFolders file={folderStructure} />
      </div>
    </div>
  );
};


export default FileBar;
