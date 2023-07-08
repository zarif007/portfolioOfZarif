import React, { ReactNode } from "react";

const GrayBorder = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-4 px-2 border-2 border-gray-700 bg-[#171717] rounded my-3">
      {children}
    </div>
  );
};

export default GrayBorder;
