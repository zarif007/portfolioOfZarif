import React, { useState } from "react";
import TerminalModal from "./Terminal.Modal";
import FileBarModal from "./FileBar.Modal";
import FileBar from "./FileBar";
import { useRecoilState } from "recoil";
import { fileBarState } from "./../atoms/FileBarAtom";
import {
  PiGearDuotone,
  PiMicrophoneDuotone,
  PiTerminalWindowDuotone,
} from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { BsFiles, BsSearch } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoTerminal } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const SideBar = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const [isFileBarOpen, setIsFileBarOpen] =
    useRecoilState<boolean>(fileBarState);

  const [isFileBarModalOpen, setIsFileBarModalOpen] = useState<boolean>(false);

  const styles = {
    firstSideBarIcons:
      "w-10 h-10 text-gray-200 m-2 hover:text-white cursor-pointer",
  };
  return (
    <div className="flex h-full min-h-screen fixed z-20">
      {/* social sidebar */}
      <div
        className="flex flex-col justify-between bg-[#2E2E2E] border-r border-[#171717]"
        style={{ maxHeight: "97vh" }}
      >
        <div className="flex flex-col space-y-4">
          <div
            className={`${isFileBarOpen && "bg-[#007acc]"} hidden lg:inline`}
            onClick={() => setIsFileBarOpen(!isFileBarOpen)}
          >
            <BsFiles className={styles.firstSideBarIcons} />
          </div>

          <div
            className={`${
              isFileBarModalOpen && "bg-[#007acc]"
            } inline lg:hidden`}
            onClick={() => setIsFileBarModalOpen(!isFileBarModalOpen)}
          >
            <BsFiles className={styles.firstSideBarIcons} />
          </div>
          <div className="">
            <BsSearch className={styles.firstSideBarIcons} />
          </div>
          <div className="">
            <FiGithub className={styles.firstSideBarIcons} />
          </div>
          <div className="">
            <AiOutlineLinkedin className={styles.firstSideBarIcons} />
          </div>
          <div className="">
            <AiOutlineFacebook className={styles.firstSideBarIcons} />
          </div>
          <div className="">
            <IoLogoInstagram className={styles.firstSideBarIcons} />
          </div>
        </div>

        <TerminalModal
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
        />

        <div className=" flex flex-col space-y-3 mb-1">
          <PiTerminalWindowDuotone
            onClick={() => setIsTerminalOpen(true)}
            className={styles.firstSideBarIcons}
          />
          <PiMicrophoneDuotone className={styles.firstSideBarIcons} />
          <PiGearDuotone className={styles.firstSideBarIcons} />
        </div>
      </div>

      <FileBarModal
        isFileBarOpen={isFileBarModalOpen}
        setIsFileBarOpen={setIsFileBarModalOpen}
      />

      {/* file sidebar */}
      {isFileBarOpen && (
        <div className="hidden lg:inline">
          <FileBar height="h-full min-h-screen" setIsOpen={setIsFileBarOpen} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
