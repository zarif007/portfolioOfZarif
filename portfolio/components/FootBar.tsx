import React from "react";
import { useRecoilState } from "recoil";
import { StatusState } from "./../atoms/StatusStateAtom";
import { useOs } from "@mantine/hooks";
import { FaApple, FaWindows } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";

const FootBar = () => {
  const os: 'windows' | 'macos' | 'ios' | 'android' | 'linux' | 'undetermined' = useOs()
  const [status, setStatus] = useRecoilState(StatusState);
  return (
    <div className="fixed bottom-0 bg-[#007acc] w-full p-[0.5] z-30 flex space-x-3 md:px-4 px-2 font-semibold">
      <p>{status}</p>
      <p>{os != 'undetermined' && osWithIcon(os)}</p>
    </div>
  );
};

const osWithIcon = (os: 'windows' | 'macos' | 'ios' | 'android' | 'linux') => {
  const icons = {
    windows: <FaWindows />,
    macos: <FaApple />,
    ios: <FaApple />,
    android: <BsAndroid2 />,
    linux: <VscTerminalLinux />
  }

  return (
    <div className="flex space-x-1 items-center justify-center">
      {icons[os]}
      <p>{os}</p>
    </div>
  )
}

export default FootBar;
