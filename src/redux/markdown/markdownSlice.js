import { createSlice } from "@reduxjs/toolkit";

const markdownTemplate = `# Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break  

Text attributes *italic*, **bold**,  
\`monospace\`, ~~strikethrough~~.  

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears


Turkey.

*[Alperen Kurşun](https://alperenkursun.netlify.app/)*`;

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    inputData: "",
    help: false,
  },
  reducers: {
    setInputData: (state, action) => {
      state.inputData = action.payload;
    },
    setHelp: (state, action) => {
      state.help = action.payload;
      if (action.payload === true) {
        state.inputData = markdownTemplate;
      } else {
        state.inputData = "";
      }
    },
  },
});

export const { setInputData, setHelp } = markdownSlice.actions;

export const inputDataSelector = (state) => state.markdown.inputData;
export const helpSelector = (state) => state.markdown.help;

export default markdownSlice.reducer;
