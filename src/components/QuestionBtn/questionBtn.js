import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHelp, helpSelector } from "../../redux/markdown/markdownSlice";

function QuestionBtn() {
  const dispatch = useDispatch();
  const help = useSelector(helpSelector);

  const toggleHelp = () => {
    dispatch(setHelp(!help));
  };

  return (
    <button onClick={toggleHelp}>
      <img src="media/question-mark.png" alt="Question" />
    </button>
  );
}

export default QuestionBtn;
