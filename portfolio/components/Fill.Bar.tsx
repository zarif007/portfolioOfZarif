import React from "react";
import PropTypes from "prop-types";

const FillBar = ({ text }: { text: string }) => {
  return (
    <div className="text-center p-1 rounded gradient1-bg my-6 text-gray-900 text-md font-bold">
      {text}
    </div>
  );
};

export default FillBar;
