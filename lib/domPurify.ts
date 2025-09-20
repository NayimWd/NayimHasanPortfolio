import DOMPurify from "isomorphic-dompurify";

export function parseHtml(content: string) {
  return {
    __html: DOMPurify.sanitize(content),
  };
}