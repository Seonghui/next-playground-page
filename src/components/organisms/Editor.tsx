import { ReactQuillProps } from "react-quill";
import DynamicQuill from "../commons/DynamicQuill";

interface EditorProps extends ReactQuillProps {}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

function Editor({ onChange }: EditorProps) {
  return <DynamicQuill modules={modules} onChange={onChange} theme="snow" />;
}

export default Editor;
