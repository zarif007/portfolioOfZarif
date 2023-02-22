import React, { useState } from 'react'
import { useRecoilState } from "recoil";
import { OpenTabsState } from "@/atoms/OpenTabsAtom";
import { AiFillFolderOpen } from "react-icons/ai";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";

const DisplayFolders = ({ file }: any) => {
    const [showChildren, setShowChildren] = useState(true);
    
    const [openEditors, setOpenEditors] = useRecoilState<any[]>(OpenTabsState);
  
    const router = useRouter();
  
    const addToOpenTabList = (file: any) => {
      const flag = openEditors.find(x => x.name === file.name)
      !flag && setOpenEditors([ ...openEditors, file ]);
    }
  
    return (
      <div className="block">
        <div
          onClick={() =>{
  
            if(file.type === "folder") setShowChildren(!showChildren)
            else {
              addToOpenTabList(file)
              router.push(`${file.url}`)
            }
          }}
          className={`border-l border-[#ff6932] text-gray-300 font-semibold px-4 py-1 max-w-lg flex items-center space-x-2 hover:bg-[#2E2E2E] ${
            (file.name === "About Zarif" || file.name === "Open Tabs") && "bg-[#2E2E2E]"
          }  cursor-pointer rounded-r my-1`}
        >
          {file.type === "folder" ? (
            <>
              <BsChevronRight className={`${showChildren && "rotate-90"}`} />
              <AiFillFolderOpen className="h-6 w-6" />
            </>
          ) : (
            <Image src={file.icon} alt="matrix" width={20} height={20} />
          )}
          <p className="unselectable">{file.name}</p>
        </div>
  
        <div className=" pl-3">
          {file.type === "folder" &&
            showChildren &&
            file.children.length > 0 &&
            file.children.map((child: any, index: number) => {
              return <DisplayFolders key={index} file={child} />;
            })}
        </div>
      </div>
    );
  };
  
export default DisplayFolders
