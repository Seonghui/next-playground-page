// import sanitizeHtml from "sanitize-html";

interface SanitizeHtmlProps {
  dirty: string;
}
function SanitizeHtml({ dirty }: SanitizeHtmlProps) {
  //   const clean = sanitizeHtml(dirty, {
  //     allowedTags: ["b", "i", "em", "strong", "a", "h1", "h2"],
  //     allowedAttributes: {
  //       a: ["href"],
  //     },
  //     allowedIframeHostnames: ["www.youtube.com"],
  //   });
  return <div dangerouslySetInnerHTML={{ __html: dirty }} />;
}

export default SanitizeHtml;
