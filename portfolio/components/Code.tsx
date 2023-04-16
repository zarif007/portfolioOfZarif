"use client";

import React, { FC, useEffect, useState } from "react";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import { Editor } from "@monaco-editor/react";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animationDelay,
  animated,
}) => {
  const [text, setText] = useState(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) clearInterval(intervalId);
        }, 15);

        return () => clearInterval(intervalId);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  // number of lines
  const lines = text.split(/\r\n|\r|\n/).length;

  const theme = darkTheme;

  return (
    <Editor
      height="100vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage={language}
      defaultValue={code}
      className="mt-2 mb-10 text-lg"
      options={{
        scrollBeyondLastLine: false,
        fontSize: 16,
      }}
    />
  );
};

export default Code;
