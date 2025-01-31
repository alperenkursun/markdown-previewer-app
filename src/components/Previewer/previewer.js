import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { inputDataSelector } from "../../redux/markdown/markdownSlice";

function Previewer() {
  const inputData = useSelector(inputDataSelector);

  return (
    <div className="preview">
      <ReactMarkdown className="markdown-preview" remarkPlugins={[remarkGfm]}>
        {inputData}
      </ReactMarkdown>
    </div>
  );
}

export default Previewer;
