import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactTextareaAutosize from "react-textarea-autosize";

const TerminalModal = ({
  isTerminalOpen,
  setIsTerminalOpen,
}: {
  isTerminalOpen: boolean;
  setIsTerminalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-[#171717] border-2 rounded-md border-gray-200 text-left align-middle shadow-xl transition-all">
                <div className="text-white p-2 font-semibold text-sm flex justify-between items-center">
                    <p>POZ Terminal</p>
                    <AiOutlineCloseCircle className="w-6 h-6 text-red-500" />
                </div>

                <div className="border-t-2">
                    <div className="p-2 text-md font-semibold">
                        <p className="text-[#ff6932]">user@portfolio-of-Zarif:~$</p>
                        <div className="flex items-start space-x-2">
                            <p className="text-[#ff6932] mt-1">{'>'}</p>
                            <form onSubmit={() => console.log('ooo')}>
                                <ReactTextareaAutosize
                                    className={`text-md bg-[#171717] text-gray-200 font-semibold mb-4 mt-1 px-1 focus:outline-0 rounded-md`}
                                    minRows={2}
                                    onChange={(e: any) => {
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TerminalModal;
