import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiFillFolderOpen, AiOutlineCloseCircle } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import matrix from "../public/matrix.gif";
import Image from "next/image";
import getUrlLocation from './../hooks/getUrlLocation';
import { folderStructure } from './../folder-structure';
import searchOnFolderStructure from './../hooks/searchOnFolderStructure';
import { FileInterface } from './../interfaces/FileInterface';
import { useRouter } from 'next/router';

interface commandInterface {
  location: string;
  command: string;
  result: (string | any);
}

const TerminalModal = ({
  isTerminalOpen,
  setIsTerminalOpen,
}: {
  isTerminalOpen: boolean;
  setIsTerminalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const router = useRouter();

  const [commands, setCommands] = useState<commandInterface[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>("");

  const [location, setLocation] = useState<string>('');

  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  useEffect(() => {
    setLocation(getUrlLocation())
  }, [])

  const handleAddCommand = (event: any) => {
    if (event.key === "Enter") {
      event.target.value = "";

      setCommands([
        ...commands,
        {
          location: `user@portfolio-of-Zarif${location}:~$`,
          command: currentCommand,
          result: "",
        },
      ]);

      const parent: (FileInterface | null) = searchOnFolderStructure(location)

      if(currentCommand.toLowerCase() === 'clear'){
        setCommands([])
      } else if(currentCommand.toLowerCase() === 'exit') {
        setCommands([])
        setIsTerminalOpen(false)
      } else if(currentCommand.toLowerCase() === 'ls') {
        setCommands([
          ...commands,
          {
            location: `user@portfolio-of-Zarif${location}:~$`,
            command: currentCommand,
            result: !parent?.children ? 'no file' : 
            <div className="flex flex-wrap space-x-6">
              {
                parent.children.map((child: FileInterface) => {
                  return (
                    <div className="flex space-x-1 items-center">
                      {child.type === "folder" ? (
                        <>
                          <AiFillFolderOpen className="h-5 w-5" />
                        </>
                      ) : (
                        <Image src={child.icon} alt="icon" width={20} height={20} />
                      )}
                      <p className="unselectable">/{child.name}</p>
                    </div>
                  )
                })
              }
            </div>,
          },
        ]);
      } else if(currentCommand.toLowerCase().startsWith('cd')) {
        const childParam = currentCommand.toLowerCase().split(' ')[1];

        let found = false;
        if(parent?.children) {

          parent.children?.map((child: FileInterface) => {
            console.log(`/${child.name}` === childParam)
            if(`/${child.name}` === childParam) {
              router.push(child.url)
              found = true;
              setCommands([
                ...commands,
                {
                  location: `user@portfolio-of-Zarif${location}:~$`,
                  command: currentCommand,
                  result: `Redirecting to ${childParam}`,
                },
              ]);
              return;
            }
          })
        }

        !found && setCommands([
          ...commands,
          {
            location: `user@portfolio-of-Zarif${location}:~$`,
            command: currentCommand,
            result: "No file or folder",
          },
        ]);
      } 
      
      setCurrentCommand("");

      setShowMatrix(true);

      setInterval(() => setShowMatrix(false), 2000);
    }
  };

  return (
    <Transition appear show={isTerminalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        onClose={() => setIsTerminalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-[#171717] border-2 rounded-md border-gray-700 text-left align-middle shadow-xl transition-all">
                <div className="text-white p-2 font-semibold text-sm flex justify-between items-center bg-[#2E2E2E]">
                  <p>POZ Terminal</p>
                  <div className="flex space-x-2">
                    <VscChromeMinimize
                      className="w-6 h-6 text-blue-500 cursor-pointer"
                      onClick={() => setIsTerminalOpen(false)}
                    />
                    <AiOutlineCloseCircle
                      className="w-6 h-6 text-red-500 cursor-pointer"
                      onClick={() => {
                        setIsTerminalOpen(false);
                        setCommands([]);
                        setCurrentCommand("");
                      }}
                    />
                  </div>
                </div>

                {showMatrix ? (
                  <Image src="https://i.ibb.co/ZM520Vg/matrix.gif" alt="matrix" width={1000} height={1000} blurDataURL="https://i.ibb.co/ZM520Vg/matrix.gif"
                  placeholder='blur' />
                ) : (
                  <div className="border-t-2 border-gray-700  bg-[#171717]">
                    <div className="p-2 text-md font-semibold pb-12">
                      <ShowPreviousCommands commands={commands} />

                      <p className="text-[#ff6932]">
                        {`user@portfolio-of-Zarif${location}:~$`}
                      </p>
                      <div className="flex items-start space-x-2">
                        <p className="text-[#ff6932] mt-1">{">"}</p>
                        <input
                          className={`w-full pb-4 text-md bg-[#171717] text-gray-200 font-semibold mt-1 px-1 focus:outline-0 rounded-md`}
                          defaultValue={currentCommand}
                          onChange={(e: any) =>
                            setCurrentCommand(e.target.value)
                          }
                          onKeyDown={(
                            event: React.KeyboardEvent<HTMLInputElement>
                          ) => handleAddCommand(event)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const ShowPreviousCommands = ({
  commands,
}: {
  commands: commandInterface[];
}) => {
  return (
    <>
      {commands.map((command: commandInterface, index: number) => {
        return (
          <div key={index}>
            <p className="text-[#ff6932]">
              {command.location}{" "}
              <span className="text-gray-200">{command.command}</span>
            </p>
            <p className="text-gray-200">{command.result}</p>
          </div>
        );
      })}
    </>
  );
};

export default TerminalModal;
