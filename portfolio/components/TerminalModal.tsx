import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import matrix from '../public/matrix.gif'
import Image from "next/image";


interface commandInterface {
  location: string; 
  command: string;
  result: string
}

const TerminalModal = ({
  isTerminalOpen,
  setIsTerminalOpen,
}: {
  isTerminalOpen: boolean;
  setIsTerminalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const [commands, setCommands] = useState<commandInterface[]>([])
  const [currentCommand, setCurrentCommand] = useState<string>('')

  const [showMatrix, setShowMatrix] = useState<boolean>(false)

  const handleAddCommand = (event: any) => {
    
    if (event.key === 'Enter') {
      event.target.value = ''
      setCommands([ ...commands, { location: 'user@portfolio-of-Zarif:~$', command: currentCommand, result: '' } ])
      setCurrentCommand('');

      setShowMatrix(true)

      setInterval(() => setShowMatrix(false), 2000)
    }

  }


  return (
    <Transition appear show={isTerminalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
                    <VscChromeMinimize className="w-6 h-6 text-blue-500 cursor-pointer" onClick={() => setIsTerminalOpen(false)} />
                    <AiOutlineCloseCircle className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => {
                      setIsTerminalOpen(false)
                      setCommands([])
                      setCurrentCommand('')
                    }} />
                  </div>
                </div>

                {
                  showMatrix ? <Image src={matrix} alt="matrix" width={1000} height={1000} /> : <div className="border-t-2 border-gray-700  bg-[#171717]">
                    <div className="p-2 text-md font-semibold pb-12">
                      
                      <ShowPreviousCommands commands={commands} />

                      <p className="text-[#ff6932]">user@portfolio-of-Zarif:~$</p>
                      <div className="flex items-start space-x-2">
                        <p className="text-[#ff6932] mt-1">{">"}</p>
                        <input
                          className={`w-full pb-4 text-md bg-[#171717] text-gray-200 font-semibold mt-1 px-1 focus:outline-0 rounded-md`}
                          defaultValue={currentCommand}
                          onChange={(e: any) => setCurrentCommand(e.target.value)}
                          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => handleAddCommand(event)}
                        />
                      </div>
                      
                    </div>
                  </div>
                }

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const ShowPreviousCommands = ({ commands }: { commands: commandInterface[]}) => {

  return (
    <>
      {
        commands.map((command: commandInterface) => {
          return (
            <div>
              <p className="text-[#ff6932]">{command.location} <span className="text-gray-200">{command.command}</span></p>
              <p className="text-gray-200">{command.result}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default TerminalModal;
