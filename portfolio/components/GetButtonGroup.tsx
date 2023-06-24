import React from "react";
import { Button } from "./ui/Button";

export default function GetButtonGroup() {
  return (
    <div className="flex ml-8">
      <div className="flex flex-col">
        <div className="flex ">
          <div className="border-l-2 border-b-2 py-6 px-4 border-gray-700 rounded-bl	"></div>
          <Button
            variant="default"
            onClick={() => {}}
            className="px-8 py-1 mt-4 -mb-5"
          >
            <p className="">Resume</p>
          </Button>
        </div>
        <div className="flex">
          <div className="border-l-2 border-b-2  py-4 px-4 mb-6 border-gray-700 rounded-bl -mt-1"></div>
          <Button
            variant="default"
            onClick={() => {}}
            className="px-8 py-3 mt-8"
          >
            <p className="">Connected</p>
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
