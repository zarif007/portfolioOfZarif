import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import FileBar from "./FileBar";


const FileBarModal = ({ isFileBarOpen, setIsFileBarOpen, }: {
    isFileBarOpen: boolean;
    setIsFileBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {

  return (
    <Transition appear show={isFileBarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20 lg:hidden inline"
        onClose={() => setIsFileBarOpen(false)}
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
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden bg-[#171717] border-2 rounded-md border-gray-700 text-left align-middle shadow-xl transition-all">
                <FileBar height="" setIsOpen={setIsFileBarOpen} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FileBarModal
