import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputData,
  inputDataSelector,
  helpSelector,
} from "../../redux/markdown/markdownSlice";

function Input() {
  const dispatch = useDispatch();
  const inputData = useSelector(inputDataSelector);
  const help = useSelector(helpSelector);

  const handleChange = (e) => {
    dispatch(setInputData(e.target.value));
  };
  return (
    <div>
      <textarea
        className="w-full h-40 border p-2 rounded-md"
        value={inputData}
        disabled={help}
        onChange={handleChange}
        placeholder="Write the Markdown content here..."
      />
    </div>
  );
}

export default Input;
