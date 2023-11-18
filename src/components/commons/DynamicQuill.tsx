import dynamic from "next/dynamic";

const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
export default DynamicQuill;
